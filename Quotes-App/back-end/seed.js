const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [ 
    {
        author :'gopal',
        text:'afsfwre'
    },
    {
        author:"yash",
        text:"dfgbgfg"
    }
]
 async function seedDB(){
    await Quotes.deleteMany ({});
    await Quotes.insertMany(dummyQuotes);
    console.log("db sedeed")
}
module.exports =seedDB;