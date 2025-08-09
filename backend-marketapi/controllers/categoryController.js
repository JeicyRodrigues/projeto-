const Category = require('../models/Category');


exports.getAll = async(req,res) => {
    const categories = await Category.find();
    res.json(categories);
};

exports.create = async (req,res) => {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
};