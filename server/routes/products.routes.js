const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product.controller.js');

//create product endpoint
router.route('/')
    .get(productCtrl.getAllProducts)
    .post(productCtrl.createProduct)

//update product by id 
router.route('/:id')
    .put(productCtrl.updateProduct)
    .delete(productCtrl.deleteProduct)

//update product stock by id 
router.route('/:id/stock')
    .put(productCtrl.updateProductStock);

//update product stock by id
router.route('/:id/stock')
    .put(productCtrl.updateProductStock);

//update product price by id
router.route('/:id/price')
    .put(productCtrl.updateProductPrice);

module.exports = router;