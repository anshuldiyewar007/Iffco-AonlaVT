const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const {
      username,
      email,
      phone,
      password,
      city,
      degree,
      percentage,
      yearOfCompletion,
      college,
      branch,
    } = req.body;

    if (
      !username ||
      !email ||
      !phone ||
      !password ||
      !city ||
      !degree ||
      !percentage ||
      !yearOfCompletion ||
      !college ||
      !branch
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
      city,
      degree,
      percentage,
      yearOfCompletion,
      college,
      branch,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(`Error from user route: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login, user };
