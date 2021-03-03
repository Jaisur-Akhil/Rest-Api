//url mongodb+srv://Rest:<password>@cluster0.5vvjs.mongodb.net/test
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env'});
connectDB();
const app = express();
app.use(bodyParser.json());
//routes
app.use('/', require('./routes/index')); 
app.listen(3000);
// app.get('/',(req, res)=>{
//     res.send("Hello World");
// });

// app.get('/employee',(req, res)=>{
//     res.send('Employees Get ')
// })