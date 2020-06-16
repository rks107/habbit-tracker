const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expresslayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded({'extended': true}));
app.use(cookieParser());

app.use(express.static('./assets'));

// Extract style and script from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expresslayouts);

// use express router
app.use ('/',require('./routes'));

// set up view Engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err) {
        console.log(`Error in runing server ${err}`);
    }

    console.log(`Server is up and running on port ${port}`);
});