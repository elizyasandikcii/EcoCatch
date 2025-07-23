const axios = require('axios');
const Data = require('../models/Data');

// NASA MODIS Algae Data
const fetchAlgaeData = async () => {
  const response = await axios.get('https://oceancolor.gsfc.nasa.gov/api/algae');
  await Data.insertMany(response.data.map(item => ({
    type: 'algae',
    coordinates: [item.longitude, item.latitude],
    value: item.concentration,
    source: 'NASA'
  })));
};

// Hourly cron job
module.exports = { fetchAlgaeData };
