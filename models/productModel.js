const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    userEmail:String,
    productID:String,
    images : [
        {
            image: String
        }
    ],
    description:String,
    category:String,
    brand:String
});

const productModel = mongoose.model('Product',productSchema);  //model name always should be singular and first letter should be capital
module.exports = productModel;