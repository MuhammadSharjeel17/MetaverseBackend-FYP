const mongoose = require('mongoose');
const AddToCart = mongoose.Schema({
    
    UserId:{
        type:String,
        required: true
    },
    title:{
        type: String,
    },
    quantity:{
        type: String,
    },
    image:{
        type: String,
    },
    price:{
        type: String,
    },
    totalPrice:{
        type: String,
    }
    
})
module.exports = mongoose.model('Cart',AddToCart);