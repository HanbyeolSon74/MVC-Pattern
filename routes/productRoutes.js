const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getProductPage);

router.get("/products/:id", productController.getProductDetail);

module.exports = router;
