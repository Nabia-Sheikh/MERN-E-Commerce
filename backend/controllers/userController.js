const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const generateToken = require("../utils/generateToken")

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.isValidPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401).json({
      message: "Invalid Credentials",
    })
  }
})

module.exports = { authUser }
