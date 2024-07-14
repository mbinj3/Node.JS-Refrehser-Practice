const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number, 
    stock: Number,
    thumbnail: String,
    images: [String]
})

exports.Product = mongoose.model('Product', productSchema);