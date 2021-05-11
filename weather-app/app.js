const express = require('express');
const path = require('path');
const router = require('./router')



const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');


app.use('/', router);




const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


app.listen(PORT, HOST, () => {
    console.log(`server listening in http://localhost:3000`);
})