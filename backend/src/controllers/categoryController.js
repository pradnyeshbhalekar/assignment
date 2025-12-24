const Category = require("../models/category");

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};


