const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },

  jobTitle: {
    type: String,
  },

  gender: {
    type: String,
  },
},{timestamps : true});

const User = mongoose.model("users", userSchema);

module.exports = User ;