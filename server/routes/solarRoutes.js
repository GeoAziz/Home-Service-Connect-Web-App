// backend/routes/solarRoutes.js
const express = require('express');
const router = express.Router();

// Sample providers data
const solarProviders = [
  {
    id: 1,
    name: "SunPower Solutions",
    description: "Leading solar financing company",
    logo: "/images/sunpower-logo.png"
  },
  {
    id: 2,
    name: "Green Energy Financiers",
    description: "Affordable solar leasing",
    logo: "/images/green-energy-logo.png"
  }
];

// API Endpoint
router.get('/solar-financing-providers', (req, res) => {
  res.json(solarProviders);
});

module.exports = router;

// backend/server.js
const express = require('express');
const cors = require('cors');
const solarRoutes = require('./routes/solarRoutes');

const app = express();
app.use(cors());  // Allow cross-origin requests
app.use('/api', solarRoutes);  // Mount solar routes

app.listen(5000, () => {
  console.log('Server running on port 5000');
});