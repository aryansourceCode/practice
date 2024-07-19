const express=require("express");
const app=express();
require("dotenv").config();
port=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.json({"message":"welcome"});
})
app.listen(port,()=>{
    console.log(`listening to ${port}`);

})