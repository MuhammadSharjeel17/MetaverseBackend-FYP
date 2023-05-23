const router=require('express').Router();
const { AddToCart, getAllCart } = require("../Controller/AddToCartController");

//routes for Add To  Cart
router.post('/add-to-cart',AddToCart);
router.get('/get-cart/:id',getAllCart);
module.exports =router;