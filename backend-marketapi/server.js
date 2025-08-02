const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');


dotenv.config();
const app = express();
//Middlers
app.use(cors());
app.use(express.json());
// Rotas principais
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('API market está funcionando');
});


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Servidor rodando na porta ${process.env.PORT}`)
        );
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));