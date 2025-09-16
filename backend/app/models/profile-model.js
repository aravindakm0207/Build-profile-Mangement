const mongoose = require("mongoose");
const {Schema,model}=mongoose
const profileSchema = new Schema({
  name: String,
  photo: String,
  bio: String,
  course: String,
  year: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      projectImages: String
    }
  ],
  videoUrl: String,
  email: String,
  phoneNumber: String,
  github: String,
  linkedin: String,
  resume: String 
});

module.exports = mongoose.model("Profile", profileSchema);
