const express = require('express');
const {
  getAllProducts,
  getProduct,
  seedProducts
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/seed', seedProducts); 

module.exports = router;