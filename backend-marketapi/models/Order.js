const mongoose = require('mongoose'); // 1. 'require' estava escrito errado

const orderSchema = new mongoose.Schema({ // 2. 'orderShema' estava com erro de digitação
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    total: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('order', orderSchema); // 3. 'module.export' e aspas estavam erradas
