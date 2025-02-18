const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.get("/feedbacks", feedbackController.getFeedbackPage);
router.get("/feedbacks/:id", feedbackController.getFeedbackDetail);

module.exports = router;
