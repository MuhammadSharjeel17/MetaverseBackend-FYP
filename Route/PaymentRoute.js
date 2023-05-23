const router=require('express').Router();
const {createPaymentSetup, authenticatePaymentSetup} = require("../Controller/PaymentController");

//routes for aboutus
router.post('/create-payment-intent',createPaymentSetup);
router.post('/handle-payment',authenticatePaymentSetup);

module.exports =router;