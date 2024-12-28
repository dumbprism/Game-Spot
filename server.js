const express = require('express')
const bodyParser = require('body-parser')
const path  = require('path')
const homePageRouter = require('./routes/homePageRouter')
const formPageRouter = require('./routes/formPageRouter')


const app = express()

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs')
app.set('views',path.join(__dirname + "/views"))

app.use(express.static(path.join(__dirname + "/public")))
app.use('/',homePageRouter);
app.use('/',formPageRouter)


app.listen(3000,(err) => {
    if(err){
        console.error(err)
    }
    console.log('server is listening on : http://localhost:3000')
})