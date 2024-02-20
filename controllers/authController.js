// // authController.js
// // authController.js

// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const registerUser = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if the username or email already exists
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res
//         .status(409)
//         .json({ message: "Username or email already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user document
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// const loginUser = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Compare the password with the hashed password stored in the database
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }

//     // Generate an access token
//     const accessToken = jwt.sign(
//       { userId: user._id, username: user.username },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ accessToken });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };
