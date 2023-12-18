const express = require('express');
const router = express.Router();
var {shop, item, addItem, cart, addToCart} = require('../controllers/shopControllers') ;

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', (req, res) => addItem);
router.get('/cart', cart);
router.post('/cart', (req, res) => addToCart);

module.exports = router;