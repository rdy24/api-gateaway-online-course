const express = require("express");
const router = express.Router();

const getOrderHandler = require("./handler/order-payment");

router.get("/", getOrderHandler.getOrder);

module.exports = router;
