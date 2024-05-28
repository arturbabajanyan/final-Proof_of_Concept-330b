const Category = require('../models/category');

// Functions to interact with the category collection
module.exports.createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  await category.save();
  return category;
};

module.exports.getCategoriesByUserId = async (userId) => {
  return await Category.find({ userId });
};

module.exports.updateCategory = async (id, updateData) => {
  return await Category.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports.deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};
