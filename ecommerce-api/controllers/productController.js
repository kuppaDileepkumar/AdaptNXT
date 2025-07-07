const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const { page = 1, limit = 10, search = '', category } = req.query;
  const query = {
    name: { $regex: search, $options: 'i' },
    ...(category && { category })
  };
  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
