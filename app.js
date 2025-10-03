const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/connectDB');
const app = express();

dotenv.config({path: path.join(__dirname,'config','config.env')});



const product = require('./routes/product');
const order = require('./routes/order');

connectDB();

app.use(express.json());  //to accept json data from the frontend
app.use('/api/v1/', product);
app.use('/api/v1/', order);

app.listen(process.env.PORT,() => { 
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});