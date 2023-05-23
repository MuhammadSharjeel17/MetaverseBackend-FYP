//import the require modules and function
const nodemailer = require("nodemailer");
const aboutus = require('../Model/AboutUsModel');
exports.sendMessage = async (req, res, next) => {
    try {
      const { Name, email, message } = req.body;
  
      console.log("req.body", req.body);
      // const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:`sharjeelaijaz50@gmail.com`,
          pass: "fphckcfesgcpojpu",
        },
      });
      let mailOptions = {
        from:email,
        to:`sharjeelaijaz50@gmail.com`,
        subject:`Message From  ${Name} and ${email}`,
        text: message,
      };
  
      transporter.sendMail(mailOptions, async function (err, info) {
        if (err) {
          console.log(err);
        } else {
          const reqData = { ...req.body, message: message };
  
          const email_verify = await aboutus.create(reqData);
        //  console.log("email",email_verify)
        return res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
            data: email_verify,
          });
        }
      });
    } catch (error) {
      next(error);
    }
  };


  exports.getMessage = async (req, res, next) => {
    try {
      
  
    const getMessages = await aboutus.find();
    if(getMessages.length > 0){
      return res.status(200).json({
        success: true,
        message: "Message get Successfully",
        data:getMessages,
      });
    }
  
        else {
         
        //  console.log("email",email_verify)
        return res.status(200).json({
            success: false,
            message: "No Message found",
           
          });
        }
      
    } catch (error) {
      next(error);
    }
  };