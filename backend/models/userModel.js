const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},
  {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

module.exports = User
