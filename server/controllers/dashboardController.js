import Booking from '../models/Booking.js';
import Service from '../models/Service.js';
import User from '../models/User.js';
import logger from '../utils/logger.js';

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id; // From auth middleware

    // Aggregate dashboard data
    const [
      totalBookings,
      activeServices,
      recentActivity,
      accountBalance,
      serviceStats
    ] = await Promise.all([
      // Total Bookings
      Booking.countDocuments({ user: userId }),

      // Active Services
      Service.countDocuments({ 
        user: userId, 
        status: { $in: ['active', 'in-progress'] } 
      }),

      // Recent Activity (last 5 activities)
      Booking.find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(5)
        .populate('service', 'name')
        .select('service status createdAt'),

      // Account Balance (if applicable)
      User.findById(userId).select('accountBalance'),

      // Service Stats by Category
      Service.aggregate([
        { $match: { user: userId } },
        { 
          $group: { 
            _id: '$category', 
            count: { $sum: 1 } 
          } 
        }
      ])
    ]);

    // Transform service stats into an object
    const serviceStatsObject = serviceStats.reduce((acc, stat) => {
      acc[stat._id] = stat.count;
      return acc;
    }, {
      maintenance: 0,
      cleaning: 0,
      beauty: 0,
      gardening: 0
    });

    // Prepare response
    const dashboardData = {
      totalBookings: totalBookings || 0,
      activeServices: activeServices || 0,
      recentActivity: recentActivity.map(activity => ({
        service: activity.service?.name || 'Unknown Service',
        date: activity.createdAt,
        status: activity.status
      })),
      accountBalance: accountBalance?.accountBalance || 0,
      serviceStats: serviceStatsObject
    };

    res.json(dashboardData);
  } catch (error) {
    logger.error('Dashboard Data Fetch Error', {
      userId: req.user.id,
      error: error.message
    });

    res.status(500).json({ 
      message: 'Failed to fetch dashboard data',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};