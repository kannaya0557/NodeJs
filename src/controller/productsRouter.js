let express=require('express')
let productRouter=express.Router()
productRouter.route('/').get((req,res)=>{res.send("Hi from Product  Details Route")});
module.exports=productRouter;