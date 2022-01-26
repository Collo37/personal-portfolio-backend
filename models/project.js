const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
  },
  status: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  remarks: {
    type: String,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
