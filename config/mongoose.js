const mongoose = require('mongoose');

//connecting mongoose to its default server and ecommerceDB

mongoose.connect('mongodb+srv://suraj222:mongosrj@cluster0.nsvf6sb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;