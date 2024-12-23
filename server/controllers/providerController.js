import Provider from '../models/Provider.js';
import geolib from 'geolib';

export const connectProvider = async (req, res) => {
  const { location, serviceType } = req.body;

  try {
    const providers = await Provider.find({ services: serviceType });

    const nearbyProviders = providers.filter((provider) => {
      const distance = geolib.getDistance(
        { latitude: location.lat, longitude: location.lng },
        { latitude: provider.location.lat, longitude: provider.location.lng }
      );
      return distance <= 5000; // 5 km
    });

    if (nearbyProviders.length > 0) {
      return res.status(200).json({ providers: nearbyProviders });
    } else {
      return res.status(404).json({ message: 'No providers found nearby.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
};