const productModel = require('../models/productModel');


//GET products API : /api/v1/products
exports.getProducts = async (req,res,next) => {

    const products  = await productModel.find({});

    res.json({
        success:true,
        message: 'Here are the products',
        data: products
    })
}

//GET single product API : /api/v1/product/:id

exports.getSingleProduct =  async (req,res,next) => {
    //console.log(req.params.id);
    try{
        const product =  await productModel.findById(req.params.id);

        res.json({
            success:true,
            message: 'your selected product',
            data: product
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message : "unable to get the product"
        });
    }
}