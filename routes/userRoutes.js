const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUserPage);

router.get("/users/:id", userController.getUserDetail);

module.exports = router;
