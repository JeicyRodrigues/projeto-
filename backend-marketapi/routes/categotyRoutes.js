const express = require('express');
const {getAll, crete} = require ('../controllers/categoryController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/',getAll);
router.post('/',auth, create);

module.exports = router