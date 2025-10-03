const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems : Array,
    amount : Number,
    userEmail : String,
    status : String,
    order_ids : Array
});

const orderModel = mongoose.model('Order',orderSchema);  //model name always should be singular and first letter should be capital
module.exports = orderModel;