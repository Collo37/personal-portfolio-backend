const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router
  .route("/")
  .get(projectsController.getAllProjects)
  .post(projectsController.addProject);

router.route("/:id").get(projectsController.getProject);

module.exports = router;
