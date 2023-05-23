const router=require('express').Router();
const { sendMessage, getMessage } = require("../Controller/AboutUsController");

//routes for aboutus
router.post('/sendmessage',sendMessage);
router.get('/getmessage',getMessage);
module.exports =router;