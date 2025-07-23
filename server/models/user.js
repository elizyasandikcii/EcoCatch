const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email validation
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8
  },
  role: { 
    type: String, 
    enum: ['pending', 'researcher', 'policymaker'], 
    default: 'pending' 
  },
  institution: { 
    type: String, 
    required: true 
  },
  credentials: {  // PDF/IMG URL for verification
    type: String,
    required: true
  },
  approved: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Auto-reject unverified accounts after 7 days
UserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800, partialFilterExpression: { approved: false } });
