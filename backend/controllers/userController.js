const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  res.send({
    email,
    password,
  })
})

module.exports = { authUser }
