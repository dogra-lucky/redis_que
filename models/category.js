const mongoose = require("mongoose")

const CategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const SubCategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const Category = mongoose.model("Category",CategorySchema)

const SubCategory= mongoose.model("SubCategory",SubCategorySchema)

module.exports= {Category,SubCategory}