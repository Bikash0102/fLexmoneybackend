const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: String,
  gender: String,
  contact: String,
  fee: String,
  slot: String
});

// Provide both singular and plural names for the model
const User = mongoose.model("User", userSchema); // singular
const Users = mongoose.model("Users", userSchema); // plural

module.exports = { User, Users };
