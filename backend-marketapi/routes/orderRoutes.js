// routes/orderRoutes.js

const express = require('express');
const { getAll, create } = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

//Toda vez que o auth é chamado aciona um routerguard

router.get('/', auth, getAll);
router.post('/', auth, create);

module.exports = router;