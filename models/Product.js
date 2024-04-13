var mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    products:[{
        type:String
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('products', ProductSchema)
