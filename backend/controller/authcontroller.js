const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

/* ================= SIGNUP ================= */
exports.userSignup = async (req, res) => {
  try {
    const { Full_Name, Last_Name, Email, Password } = req.body;

    if (!Full_Name || !Last_Name || !Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email already exists check
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    const user = await User.create({
      Full_Name,
      Last_Name,
      Email,
      Password: hashedPassword,
    });
    console.log(user)

    res.status(201).json({
      success: true,
      message: "Signup successful",
      data: {
        _id: user._id,
        Full_Name: user.Full_Name,
        Last_Name: user.Last_Name,
        Email: user.Email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signup error",
      error: error.message,
    });
  }
};

/* ================= SIGNIN ================= */

exports.userSignin = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        Full_Name: user.Full_Name,
        Last_Name: user.Last_Name,
        Email: user.Email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signin error",
      error: error.message,
    });
  }
};
