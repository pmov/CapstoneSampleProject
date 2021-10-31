let productModel = require("../model/product.model");

let storeProductInfo = (req,res)=> {
    
    let product = req.body;
   productModel.insertMany(product,(err,result)=> {
       if(!err){
           res.json(result)
       }else {
           res.json(err);
       }
   });
}
// let storeProductInfo = async (req,res)=> {
//     try{
//     let product = req.body;
//     console.log(product);
//     let count = await productModel.find().count();
//     console.log("Number of products "+count);
//     product._id=count+1;
//     console.log(product);
//     let result = await productModel.insertMany(product);
//     if(result){
//         console.log(result);
//         res.send("Record stored successfully");
//     }
// }catch(Exp){
//     console.log(Exp)
//     res.send("Error generated..")
// }
// }

let retriveProductInfo = async (req,res)=> {
    try{
        let products = await productModel.find();
        res.json(products);
    }catch(Exp){
        res.send(Exp);
    }
}


module.exports={storeProductInfo,retriveProductInfo}