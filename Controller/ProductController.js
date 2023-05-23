const { default: SingleImageUploading } = require('../Helpers/SingleImageUploading');
const Product= require('../Model/ProductModel');
const ImageProduct= require('../Model/ImageProductModel');
exports.createProduct = async (req,res,next)=>{
    console.log("req.body",req.body);
    
    try{
      
    const createProduct =await Product.create(req.body);
    // const result = await createProduct.save();
    if(createProduct){
       
        return res.status(200).json({
            status:true,
            message:"Product Added Successfully",
            data:createProduct
        })
    }
}
catch(error){
       next(error);
    }
}
exports.getAllProducts = async (req,res,next)=>{
    try{
      
   const getProducts  = await Product.find();
   console.log(getProducts)
    // const result = await createProduct.save();
    if(getProducts.length > 0){
       
        return res.status(200).json({
            status:true,
            message:"Product Get Successfully",
            data:getProducts
        })
    }
    else if(getProducts.length == 0){
        return res.status(200).json({
            status:false,
            message:"No Products Available",
            
        }) 
    }
}
catch(error){
       next(error);
    }
}


exports.updateProducts = async (req,res,next)=>{

    
    try{
      let id = req.params.id;
   const findProducts  = await Product.findById(id);
   if(!findProducts){
    return res.status(200).json({
        status:false,
        message:"Product not found",
    })
   }
   else{
       const updateProducts = await Product.findByIdAndUpdate(id,req.body);
        return res.status(200).json({
            status:true,
            message:"Product Update Successfully",
            data:updateProducts
        })
    }
}
catch(error){
       next(error);
    }
}


exports.getSingleProduct = async (req,res,next)=>{

    
    try{
      let id = req.params.id;
   const findProducts  = await Product.findById(id);
   if(findProducts){
    return res.status(200).json({
        status:true,
        message:"Single Product found",
        data:findProducts
    })
   }
   else{
       
        return res.status(200).json({
            status:false,
            message:"Product not Update Successfully",
            
        })
    }
}
catch(error){
       next(error);
    }
}
exports.deleteProduct = async (req,res,next)=>{ 
    try{
      let id = req.params.id;
   const findProducts  = await Product.findByIdAndRemove(id);
   if(findProducts){
    return res.status(200).json({
        status:true,
        message:"Deleted Product Successfully",
        data:findProducts
    })
   }
   else{
       
        return res.status(200).json({
            status:false,
            message:"Product not found",
            
        })
    }
}
catch(error){
       next(error);
    }
}

exports.createImageProduct = async (req, res, next) => {
    try {
        // console.log(req.body.values.title)
        let updateFields = {
            "title":req.body.title,
            "colors":req.body.colors,
            "priceinDollars":req.body.priceinDollars,
            "priceinPkr":req.body.priceinPkr,
            "quantity":req.body.quantity,
            "category":req.body.category,
            "description":req.body.description,
            
         };

        if (req.file) {
          updateFields.image = req.file.originalname;
        }

      // Check if a file is included in the request
    
  
      // Upload the image file
     
    //   const imageName = req.file.originalname;
      // Create the product
     
      const createProduct = await ImageProduct.create(
//         "title": req.body.values.title,
//   "quantity": req.body.values.quantity,
//   "priceinDollars": req.body.values.priceinDollars,
//   "priceinPkr": req.body.values.priceinPkr,
//   "colors": req.body.values.colors,
//   "category": req.body.values.category,
//   "image": req.file.originalname,
//   "description": req.body.values.description

updateFields
      );
  
      if (createProduct != null) {
        return res.status(200).json({
          status: true,
          message: "Product added successfully",
          data: createProduct
        });
      }
    } catch (error) {
      next(error);
    }
  };
  

  exports.getImageProduct = async (req, res, next) => {
    try {
      
    //   const imageName = req.file.originalname;
      // Create the product
      const createProduct = await ImageProduct.find();
  
      if (createProduct.length !== 0) {
        return res.status(200).json({
          status: true,
          message: "Getting images Product  successfully",
          data: createProduct
        });
      }
      else{
        return res.status(200).json({
            status: true,
            message: "No Product found",
            data: createProduct
          });
      }
    } catch (error) {
      next(error);
    }
  };
  

  exports.deleteImageProduct = async (req,res,next)=>{

    
    try{
      let id = req.params.id;
   const findProducts  = await ImageProduct.findByIdAndRemove(id);
   if(findProducts){
    return res.status(200).json({
        status:true,
        message:"Deleted Product Successfully",
        data:findProducts
    })
   }
   else{
       
        return res.status(200).json({
            status:false,
            message:"Product not found",
            
        })
    }
}
catch(error){
       next(error);
    }
}
exports.updateImageProducts = async (req,res,next)=>{
    try{
      let id = req.params.id;
   const findProducts  = await ImageProduct.findById(id);
   if(!findProducts){
    return res.status(200).json({
        status:false,
        message:"Product not found",
    })
   }
   else{
       const updateProducts = await Product.findByIdAndUpdate(id,req.body);
        return res.status(200).json({
            status:true,
            message:"Product Update Successfully",
            data:updateProducts
        })
    }
}
catch(error){
       next(error);
    }
}


exports.getSingleImageProduct = async (req,res,next)=>{

    
    try{
      let id = req.params.id;
   const findProducts  = await ImageProduct.findById(id);
   if(findProducts){
    return res.status(200).json({
        status:true,
        message:"Single Product found",
        data:findProducts
    })
   }
   else{
       
        return res.status(200).json({
            status:false,
            message:"Product not Update Successfully",
            
        })
    }
}
catch(error){
       next(error);
    }
}