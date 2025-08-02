const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


exports.register = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Usuário Registado' });
};

exports.login = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Credenciais Inválidas' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
};
 