const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// @route POST /api/auth/login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  if (!admin || !(await admin.comparePassword(password))) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }

  const token = generateToken(admin._id);
  res.cookie("token", token, cookieOptions);

  res.json({ success: true, admin: admin.toSafeObject(), token });
};

// @route POST /api/auth/logout
const logout = (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.json({ success: true, message: "Logged out successfully" });
};

// @route GET /api/auth/me
const getMe = async (req, res) => {
  res.json({ success: true, admin: req.admin.toSafeObject() });
};

module.exports = { login, logout, getMe };
