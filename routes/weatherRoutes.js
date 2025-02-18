const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/weather", weatherController.getWeatherPage);
router.get("/weather/:date", weatherController.getWeatherDetail);

module.exports = router;
