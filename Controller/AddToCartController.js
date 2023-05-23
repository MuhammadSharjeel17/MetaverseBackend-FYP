const Cart = require('../Model/AddtoCartModel');

exports.AddToCart = async (req,res,next)=>{
    console.log("req.body",req.body);
    
    try{
      console.log(req.body);
    const AddToCart =await Cart.create(req.body);

    // const result = await AddToCart.save();
    if(AddToCart){
       
        return res.status(200).json({
            status:true,
            message:"Added to Cart",
            data:AddToCart
        })
    }
}
catch(error){
       next(error);
    }
}


exports.getAllCart = async (req,res,next)=>{
    
    try{
        
        let {id} = req.params;
        console.log("id",id)
        const result = await Cart.find({"UserId":id});
        if(result){
            return res.status(200).json({
                status:true,
                message:"All Cart",
                data:result
            })
        }
    }
  catch(error){
    console.log(error)
       next(error);
    }
}
    // const result = await AddToCart.save();
    