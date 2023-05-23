const stripe = require('stripe')('sk_test_51N7vqTBtBzUMTu5ZAUTb7ugKVIu9XaMadBIJYFTuTLWCerT4ZhWh37mYKesKO65tplJmsDjF7PEm6cuA8q3dd4AM00PXXcsjhg');
exports.createPaymentSetup =async(req,res)=>{
    try {
      
        const { amount } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'usd',
        });
        console.log(paymentIntent);
       return  res.status(200).json({ clientSecret: paymentIntent.client_secret });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }

    }

    exports.authenticatePaymentSetup =async (req,res)=>{
        try {
            const { paymentIntentId } = req.body;
            
            const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
            res.status(200).json({ message: 'Payment succeeded',data:paymentIntent });
          } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: error.message });
          }
    }