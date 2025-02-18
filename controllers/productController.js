const products = require("../models/productModel");

exports.getProductPage = (req, res) => {
  res.render("product/productPage", { products });
};

exports.getProductDetail = (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.productId === productId); // 상품 ID로 검색

  if (product) {
    res.render("product/productDetail", { product });
  } else {
    res.status(404).send("Product not found");
  }
};
