const mongoose = require("mongoose")
const ProductsSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
    }
})

const Products= mongoose.model("Product",ProductsSchema)
module.exports=Products 