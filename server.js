 const express = require('express')
 const bodyParser = require('body-parser')
 const path = require('path')
 const homeRouter = require('./routes/homeRouter')
 const ptFormRouter = require('./routes/ptFormRouter')
 const productFormRouter = require('./routes/productFormRouter');
 const productDisplayRotuer = require('./routes/productDisplayRouter');

 const app = express();
 app.use(bodyParser.urlencoded({extended : true}));

 app.set('view engine','ejs');
 app.set('views',path.join(__dirname + "/views"))
 
 //routers
app.use('/',homeRouter);
app.use('/',ptFormRouter);
app.use('/',productFormRouter);
app.use('/',productDisplayRotuer);
 app.listen(3000,(err) => {
    if(err){
        console.error(err)
    }
    console.log('the server is listening at : http://localhost:3000')
 })