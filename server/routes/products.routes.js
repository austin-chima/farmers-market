const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product.controller.js');

//create product endpoint
router.route('/')
    .get(productCtrl.getAllProducts)
    .post(productCtrl.createProduct)

//update product by id 
router.route('/:id')
    .put(productCtrl.updateProduct);

//update product price by id
router.route('/:id/price')
    .put(productCtrl.updateProductPrice);

module.exports = router;