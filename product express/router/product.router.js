let express = require("express");
let router = express.Router();
let productController = require("../controller/product.controller")
router.post("/storeProdcutInfo",productController.storeProductInfo);
router.get("/getProductInfo",productController.retriveProductInfo);


module.exports= router;