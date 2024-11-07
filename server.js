const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  friends: [String]
});

const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Rest of the registration logic...
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// More backend routes and logic...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
