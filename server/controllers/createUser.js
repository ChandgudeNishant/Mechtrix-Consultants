const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required 😇",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please log in to continue 😀",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      approved: approved,
    });

    return res.status(201).json({
      success: true,
      status: 201,
      data: user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found 🧐' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password! 😔' });
    }

    return res.status(200).json({ success: true, message: 'Login successful', data: user });
  } catch (error) {
    console.log('Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error 🤖' });
  }
};
