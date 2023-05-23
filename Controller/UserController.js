// const {  } = require('../Helpers/ImageUploading');
const User = require('../Model/UserModel');
const bcrypt = require('bcryptjs');
// const {uploadImage } =require('../Helpers/ImageUploading');
const jsonwebtoken = require('jsonwebtoken');
//function For Register User
exports.registerUser = async (req,res,next)=>{
    console.log("req.body",req.body)
    try{
        const check = await User.findOne({"email" : req.body.email})
       
        if(check){
            return res.status(200).json({
                status: false,
                message: "Email is already Exist"
              })      
        }
        else{
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.password, salt); 
      req.body.password = hash;
    const registerUser = new User({
        Name:req.body.Name,
        email:req.body.email,
        password:hash,   
    });
    const result = await registerUser.save();
    if(result){
        const token = jsonwebtoken.sign({
          email:result.Email,
          role:result.role,
          id:result._id,
        }, process.env.JWT_SECRET, { expiresIn: '7d' });
        // let role = result.role;
        return res.status(200).json({
            status:true,
            message:"User Registered Successfully",
            data:token
        })
    } 
}
}
catch(error){
       next(error);
    }
}
//Login the user
exports.loginUser = async (req,res,next)=>{
    try{
     console.log("In")
        const check =await User.findOne({"email":req.body.email});
    if(check){    
        if (bcrypt.compareSync(req.body.password, check.password)) {
          
            check.Password = undefined;
            
            const token = jsonwebtoken.sign({
              email: check.Email,
              id : check._id,
              role: check.role
            }, process.env.JWT_SECRET, { expiresIn: '7d' }); 
        console.log(token)
        return res.status(200).json({
            status:true,
            message:"Login Successfully",
            data:token,
          
        })
    }
    else{
      return res.status(200).json({
        status:false,
        message:"Password not Matched",   
    })
    }   
}
    else{
        return res.status(200).json({
            status:false,
            message:"Email not matched",
           
        })
    }
}

catch(error){
        next(error);
    }
}

exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    let updateFields = { "Name": req.body.name };
    if (req.file) {
      updateFields.image = req.file.originalname;
    }
    const user = await User.findByIdAndUpdate(id, updateFields, { new: true });
    if (user) {
      return res.status(200).json({
        status: true,
        message: "Updated Successfully",
        data: user,
      })
    }
    return res.status(400).json({
      status: false,
      message: "User not found"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
   console.log("In")
const {id} = req.params;
    const find = await User.findById(id);
    
    console.log(find);
    
if(find){
  return  res.status(200).json({
    status:true,
    message:"User get Successfully",
    data:find,
  
})
}
else{
  return  res.status(200).json({
    status:false,
    message:"Not getting User ",
})
}
    }
   catch (error) {
    // res.status(500).json({ error: error.message });
    console.log(error);
  }
};
