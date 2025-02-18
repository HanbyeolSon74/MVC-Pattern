const feedbacks = require("../models/feedbackModel");

exports.getFeedbackPage = (req, res) => {
  res.render("feedback/feedbackPage", { feedbacks });
};

exports.getFeedbackDetail = (req, res) => {
  const feedbackId = req.params.id;
  const feedback = feedbacks.find((f) => f.feedbackId === feedbackId);
  if (feedback) {
    res.render("feedback/feedbackDetail", { feedback });
  } else {
    res.status(404).send("Feedback not found");
  }
};
