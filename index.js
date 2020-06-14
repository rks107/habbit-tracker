const express = require('express')
const app = express();
const port = 800;
const expresslayouts = require('express-ejs-layouts');

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