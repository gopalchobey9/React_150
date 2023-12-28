const express = require("express");
const app = express();

const mongoose = require("mongoose")
const seedDB = require("./seed");



mongoose.connect("mongodb://127.0.0.1:27017/Quotes")
.then(()=>{
    console.log("db connected")
})
.catch(err => console)
 
// seedDB();

app.get("/", (req,res)=>{
    res.status(200).json({msg:"hello from Quotes app"});
})


//  const port = process.env.PORT || 8080
const port =8080;
app.listen(port,()=>{
 console.log(`server listening on ${port}`)
})