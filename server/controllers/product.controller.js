const Product = require('../models/product.model');

// Handler To Retrive All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Handler To Create New Product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Handler To Update a Product By ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Handler To Update Product Selling Price By ID
exports.updateProductPrice = async (req, res) => {
    const { price } = req.body; // Extract the new price from the request body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { price }, // Update only the price field
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Handler to Update Product Stock by ID
exports.updateProductStock = async (req, res) => {
    try {
        const { stock } = req.body;

        // Validate stock value
        if (stock === undefined) {
            return res.status(400).json({ message: 'Stock value is required' });
        }

        // Update only the stock field
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: { stock } },
            { new: true, runValidators: true }
        );

        // Check if the product was found and updated
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Return the updated product
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Handler to Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

