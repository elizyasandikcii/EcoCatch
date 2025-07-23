const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['microplastic', 'algae', 'biodiversity'],
    required: true
  },
  coordinates: {
    type: [Number],  // [longitude, latitude]
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    enum: ['NASA', 'EMODnet', 'Landsat'],
    required: true
  }
});

// Geospatial indexing for fast queries
DataSchema.index({ coordinates: '2dsphere' });
module.exports = mongoose.model('Data', DataSchema);
