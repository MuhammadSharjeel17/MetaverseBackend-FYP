const mongoose = require('mongoose');
const AboutUsSchema = mongoose.Schema({
    
    Name:{
        type:String
    },
    Email:{
        type: String,
    },
    message:{
        type: String,
    },
    
})
module.exports = mongoose.model('AboutUs',AboutUsSchema);