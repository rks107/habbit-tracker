const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rks:rohit@cluster1-sseb0.mongodb.net/habbit-tracker?retryWrites=true&w=majority', { useUnifiedTopology: true , useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting DB"));

db.once('open', function(){
    console.log("Connected to a database :: MongoDB");
});

module.exports = db;