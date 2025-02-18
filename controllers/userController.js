const users = require("../models/userModel");

exports.getUserPage = (req, res) => {
  res.render("user/userPage", { users });
};

exports.getUserDetail = (req, res) => {
  const userEmail = req.params.id;
  const user = users.find((user) => user.email === userEmail);

  if (user) {
    res.render("user/userDetail", { user });
  } else {
    res.status(404).send("User not found");
  }
};
