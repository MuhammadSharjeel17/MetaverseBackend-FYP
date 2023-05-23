const mongoose = require('mongoose');
const ImageSchema = mongoose.Schema({
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
    image:{
        type:String
    },
    description:{
        type: String,
   
    },
    category:{
        type: String,
   
    },
    
})
module.exports = mongoose.model('ImageProduct',ImageSchema);