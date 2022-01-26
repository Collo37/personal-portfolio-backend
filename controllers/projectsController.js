const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
  try {
    const query = req.query;
    if (query) {
      const projects = await Project.find(query);
      res.status(200).json({
        message: "successful",
        data: projects,
      });
    } else {
      const projects = await Project.find({});
      res.status(200).json({
        message: "successful",
        data: projects,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "failed",
      data: error,
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    let project = await Project.findOne({ name: req.params.id });
    res.status(200).json({
      message: "successful",
      data: project,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).json({
      message: "successful",
      data: project,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
      data: error,
    });
  }
};
