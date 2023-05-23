const mongoose = require('mongoose');
const SignInSchema = mongoose.Schema({
    Name: { 
        type:String
    },
    email: { 
        type:String
    },
    password:{
        type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    validate: {
      validator: function (value) {
        return  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{12,100}$/.test(value);
      },
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character , and be between 6 and 30 characters in length.'
    }
    },
    image:{
        type:String
    },role: { 
        type: String,
        default: 'User',

      },
    
})
module.exports = mongoose.model('SignIn',SignInSchema);