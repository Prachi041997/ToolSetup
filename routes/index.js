var express = require('express');
var router = express.Router();
var productController = require("../controller/productController")

router.post('/add-product', productController.addProduct)

module.exports = router;
