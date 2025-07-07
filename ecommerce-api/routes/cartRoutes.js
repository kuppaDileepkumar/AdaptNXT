const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const controller = require('../controllers/cartController');

router.get('/', auth, controller.getCart);
router.put('/', auth, controller.updateCart);

module.exports = router;
