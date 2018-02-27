const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const Router        = require('./config/Routes');

const output = require('./middlewares/output');
const db = require('./config/Database');



app.use(output.responses);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type : 'application/json'}))

app.use(Router);



app.get('/',(req,res) => {
    console.log(res.resp)
    res.success('version 1.0.0')
});



const PORT = process.env.PORT || 8081;

app.listen(PORT,() => {
    console.log(`Server started at http://localhost:${PORT}/`);
});