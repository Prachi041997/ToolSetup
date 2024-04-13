var ProductSchema = require("../models/Product")


module.exports.addProduct = (req,res) => {
    try{
        const {softwares} = req.body 
        product = softwares.map(product => { return product.option })
        if(softwares.length == 0) return res.status(400).json({message:"No product found"})
        const newProduct = new ProductSchema({
            products:product,
        })

        newProduct.save()
        return res.status(200).json({message:"added successfully"})
    }catch(err){
        return res.status(400).json({message:"Server Error",err:err.message})
    }


}