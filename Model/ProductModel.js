const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title: { 
        type:String
    },
    quantity: { 
        type:String
    },
    priceinDollars:{
        type: String,
   
    },
    priceinPkr:{
        type: String,
    },
    colors:{
        type: String,
   
    },
    category:{
        type: String,
   
    },
    image:{
        type:String
    },
    description:{
        type: String,
   
    },
    
})
module.exports = mongoose.model('Products',ProductSchema);