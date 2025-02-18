const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/orders", orderController.getOrderPage);

router.get("/orders/:id", orderController.getOrderDetail);

module.exports = router;
