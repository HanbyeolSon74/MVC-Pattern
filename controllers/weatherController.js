const weathers = require("../models/weatherModel");

exports.getWeatherPage = (req, res) => {
  res.render("weather/weatherPage", { weathers });
};

exports.getWeatherDetail = (req, res) => {
  const date = req.params.date;
  const weather = weathers.find((w) => w.date === date);

  if (weather) {
    res.render("weather/weatherDetail", { weather });
  } else {
    res.status(404).send("Weather data not found");
  }
};
