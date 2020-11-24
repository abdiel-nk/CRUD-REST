const morgan = require('morgan');
const bodyParser =  require('body-parser');
const express = require('express');
const app=  express();

const productosRoutes= require('./route/producto');
//settings
app.set('json spaces', 4);
//mid lewares urlcoded.. enteder datos de un formulario ...

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes

app.use('/producto',productosRoutes);
//start server 



app.listen(3000, () =>{
 console.log('server on port ', 3000);
});


//////minuto 13:12 