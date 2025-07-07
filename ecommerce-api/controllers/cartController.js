const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  res.json(cart || { items: [] });
};

exports.updateCart = async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user._id },
    { items: req.body.items },
    { upsert: true, new: true }
  );
  res.json(cart);
};
