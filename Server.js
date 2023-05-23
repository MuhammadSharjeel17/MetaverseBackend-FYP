const UserRoute = require('./Route/UserRoute');
const AboutusRoute = require('./Route/AboutUsRouter');
const ProductRoute = require('./Route/ProductRoute');
const PaymentRoute = require('./Route/PaymentRoute');
const AddCartRoute = require('./Route/AddToCartRoute');
const server = require("http").createServer();
const express=require('express');
const colors = require('colors');
colors.enable();
const app=express();
const mongoose=require("mongoose") 
const cors=require("cors")
const morgan=require('morgan');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })
const path=require('path')
const PortNo=8080;
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', false);
app.use("/ImageUploads", 
express.static(path.join(__dirname, "/ImageUploads")));
//For MongoDB Connection
mongoose.connect(process.env.MONGODB , {useNewUrlParser: true }).then(()=>{
    console.log(`MongoDB Connected at ${ "Metaverse Server"}`.cyan.underline.blue);
}).catch((err)=>{
console.log(   `Error In MongoDB Connection is ${err}`.underline.red) //In case of Error in Database connectivity
})
// Routes for All APIs 
app.use('/api/user',UserRoute);
app.use('/api/details',AboutusRoute);
app.use('/api/product',ProductRoute);
app.use('/api/cart',AddCartRoute);
app.use('/api/v1/payment',PaymentRoute);
// Server Running
app.listen(PortNo,()=>{  
    console.log(`Metaverse Server Running With Port No Of ${PortNo}`.underline.blue)
})


