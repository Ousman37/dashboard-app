// // models/User.js
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Middleware to hash password before saving
// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

// // Custom error handling for duplicate entries
// userSchema.post("save", function (error, doc, next) {
//   if (error.name === "MongoError" && error.code === 11000) {
//     const key = Object.keys(error.keyValue)[0];
//     const value = error.keyValue[key];
//     const message = `${key} '${value}' is already taken.`;
//     return next(new Error(message));
//   }
//   next(error);
// });

// module.exports = mongoose.model("User", userSchema);
