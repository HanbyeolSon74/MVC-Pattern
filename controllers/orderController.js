const orders = require("../models/orderModel");

exports.getOrderPage = (req, res) => {
  res.render("order/orderPage", { orders });
};

exports.getOrderDetail = (req, res) => {
  const orderId = req.params.id;
  const order = orders.find((o) => o.orderId === orderId);
  if (order) {
    res.render("order/orderDetail", { order });
  } else {
    res.status(404).send("Order not found");
  }
};
