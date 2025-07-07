const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');
const controller = require('../controllers/productController');

router.get('/', controller.getAllProducts);
router.post('/', auth, authorize(['admin']), controller.createProduct);
router.put('/:id', auth, authorize(['admin']), controller.updateProduct);
router.delete('/:id', auth, authorize(['admin']), controller.deleteProduct);

module.exports = router;
