const Cart = require("../models/cart");

exports.getCart = async (req, res) => {
  const cart = await Cart.find().populate("productId");
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity <= 0) {
    return res.status(400).json({ message: "Invalid input" });
  }
  const existingItem = await Cart.findOne({ productId });

  if (existingItem) {
    existingItem.quantity += quantity;
    await existingItem.save();

    return res.status(200).json(existingItem);
  }
  const newItem = await Cart.create({
    productId,
    quantity
  });

  res.status(201).json(newItem);
};


exports.removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
};
