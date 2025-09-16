const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const profileSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  pronoun: { type: String }
});

module.exports = model("Profile", profileSchema);
