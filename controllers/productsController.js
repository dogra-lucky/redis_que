const Product = require("../models/products")
const mongoose = require("mongoose")

const {Category,SubCategory}= require("../models/category")

exports.create= async (req,res)=>{
    try {
        console.log("44445544",req.body)

        req.body.category= new mongoose.Types.ObjectId(req.body.category)
        req.body.subcategory=new mongoose.Types.ObjectId(req.body.subcategory)
        const product= await Product.create(req.body)

        res.status(200).send(product)
        
    } catch (error) {
        console.log("44444",error)
        res.status(400).json(error)
    }
}

exports.update= async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new :true})
        res.status(200).send(product)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

exports.get= async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate("category").populate("subcategory")

        res.status(200).send(product)

    } catch (error) {
        res.status(400).json(error)
        
    }
}

exports.createCategory= async (req,res)=>{
    try {

        const category = await Category.create(req.body)
        res.status(200).send(category)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

exports.createSubCategory= async (req,res)=>{
    try {
        const sub_category = await SubCategory.create(req.body)

        res.status(200).send(sub_category)

        
    } catch (error) {
        res.status(400).json(error)
        
    }
}