const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  emptyCart
} = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getCart)
  .post(addToCart)
  .delete(emptyCart); 

router.route('/:productId')
  .patch(updateCartItem) 
  .delete(removeFromCart);

module.exports = router;