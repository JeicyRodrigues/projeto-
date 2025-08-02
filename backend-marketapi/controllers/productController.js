const Product = require ('../models/Product');

exports.getAll = async (req, res) => {
    const products = await Product.find().populate('category');
    res.json(products);
};

exports.create = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
};

exports.update = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(product);
}

exports.delete = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message:'Produto Deletado'});
};