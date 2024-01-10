const express = require("express");
const app = express();
const mongoose = require("mongoose")
const seedDB = require("./seed");
const cors = require("cors");
const quoteRoute =require("./apis/quoteRoute")


mongoose.connect("mongodb+srv://gopalchobey9:Do23BT93oUttO0jq@cluster0.n3lohkz.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err => console)
 
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: ['http://localhost:3000']}));
app.use(express.json());
app.use(quoteRoute);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// seedDB();
app.get("/", (req,res)=>{
    res.status(200).json({msg:"hello from Quotes app"});
})


//  const port = process.env.PORT || 8080
const port =8080;
app.listen(port,()=>{
 console.log(`server listening on ${port}`)
})