const mongoose = require("mongoose");
const { Schema } = mongoose;
const Noteschema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Notes = mongoose.model("note", Noteschema);

module.exports = Notes;
