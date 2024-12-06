let express=require('express');
let app=express();
let port=9101
let categoryRouter=require('./src/controller/categoryRouter')
let productRouter=require('./src/controller/productsRouter')
//default Router
app.get('/',function(req,res)
{
    res.send('Hii, from express')
})
app.get('/products',function(req,res)
{
    res.send("Hii From Products")
})
app.use('/category',categoryRouter)
app.use('/products',productRouter)
app.listen(port,function(err)
{
    if(err)throw err;
    console.log("Server is running on port number"+port)
})
