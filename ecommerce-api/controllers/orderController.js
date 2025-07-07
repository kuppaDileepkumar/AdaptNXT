const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart || cart.items.length === 0)
    return res.status(400).json({ message: 'Cart is empty' });

  const order = await Order.create({
    userId: req.user._id,
    items: cart.items
  });

  await Cart.findOneAndDelete({ userId: req.user._id });

  res.status(201).json(order);
};
