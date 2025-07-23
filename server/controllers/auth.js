const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Apply for account (admin approval required)
exports.apply = async (req, res) => {
  try {
    const { email, password, institution, credentials } = req.body;

    // Check if user exists
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    // Create unapproved account
    const user = new User({
      email,
      password: await bcrypt.hash(password, 12),
      institution,
      credentials
    });

    await user.save();
    res.status(201).json({ message: 'Application submitted for review' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Admin approval endpoint
exports.approveUser = async (req, res) => {
  if (req.user.role !== 'admin') return res.sendStatus(403);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { approved: true, role: req.body.role },
    { new: true }
  );

  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};
