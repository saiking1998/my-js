const mongoose = require("mongoose");
var { Schema } = mongoose;
const Userschema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
var User = mongoose.model("user", Userschema);

module.exports = User;
