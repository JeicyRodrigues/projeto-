const express = require('express');
const { getAll, create } = require('../controllers/categoryController'); // corrigido create
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAll);
router.post('/', auth, create);

module.exports = router;
