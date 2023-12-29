const express = require('express');
const router = express.Router();
const Quotes = require('../models/Quote');
router.get('/get',  (req, res)=> {
    res.send("yahoo");
})

router.get('/allquotes',async (req, res)=>{

    try{

     let allQuotes=   await Quotes.find()
     res.status(200).json(allQuotes);

    }
    catch(err){
        res.status(400).json({msg:'something went wrong '})
    }
})

router.post('/addquotes',async (req, res)=>{

    let {text ,author } = req.body;
   await Quotes.create({text:text,author:author})
   res.status(200).json({msg:"successfuly added quote"})

})


module.exports = router;
