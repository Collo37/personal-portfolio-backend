const router = require("express").Router();

const messageController = require("../controllers/messageController");

router.route("/send").post(messageController.sendMessage);

module.exports = router;
