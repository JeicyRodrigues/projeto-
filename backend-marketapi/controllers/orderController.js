const Order = require ('../models/Order');

exports.getAll = async (req, res,) => {
    const orders = await Order.find().populate('user').populate('products');
    res.json(orders);
};

exports.create = async (req, res) => {
    const order = new Order (req.body);
    await order.save()
    res.starus(201).json(order);
};

