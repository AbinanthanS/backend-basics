const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

//POST - create order API : /api/v1/order

exports.createOrder = async (req,res,next) => {
     //console.log(req.body,'data from the frontend');

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.product.quantity), 0)).toFixed(2); //acc stores the previous value for each iteration
    
    

    //console.log(cartItems[0].product.userEmail,'cartItems');
    //console.log(amount,'amount');

        const status = 'pending';

        let order_ids = new Array();
        cartItems.forEach((item) => {
            order_ids.push(item.product.productID);
        });

        const order = await orderModel.create({cartItems, amount, status, order_ids});
        //console.log(order,'new order');


        res.json({
            success: true,
            order
        });
    }

        
