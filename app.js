const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("main");
});

// 라우터 연결
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

app.use("/", userRoutes);
app.use("/", orderRoutes);
app.use("/", productRoutes);
app.use("/", feedbackRoutes);
app.use("/", weatherRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
