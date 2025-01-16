const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  city: { type: String, required: true },
  degree: { type: String, required: true },
  percentage: { type: Number, required: true },
  yearOfCompletion: { type: Number, required: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    throw new Error("Token generation failed");
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
