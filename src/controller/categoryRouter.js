let express=require('express')
let categoryRouter=express.Router()
categoryRouter.route('/').get((req,res)=>{res.send("Hi from Category Details Route")});
module.exports=categoryRouter;