const Product = require("../models/product");
const Category = require("../models/category");

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, category, imageUrl } = req.body;

    let categoryDoc = await Category.findOne({
      name: { $regex: new RegExp(`^${category}$`, "i") }
    });

    if (!categoryDoc) {
      categoryDoc = await Category.create({ name: category });
    }

    const product = await Product.create({
      title,
      description,
      price,
      category: categoryDoc._id,
      imageUrl
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
