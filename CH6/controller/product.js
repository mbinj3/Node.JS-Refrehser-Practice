const model = require('../model/product');
const Product = model.Product;

exports.createProduct = async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(400).json(err); 
    } 
}

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }catch(err){
        res.status(400).json(err)
    }
}

exports.getProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(201).json(product);
    }catch(err){
        res.status(400).json(err)
    }
}

exports.replaceProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const replacedProduct = await Product.findOneAndReplace({_id:id}, req.body, {returnDocument: 'after'});
        res.status(201).json(replacedProduct)
    }catch(err){
        res.status(400).json(err);
    }
}

exports.updateProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedProduct = await Product.findOneAndUpdate({_id:id}, req.body, {returnDocument: 'after'});
        res.status(201).json(updatedProduct);

    }catch(err){
        res.status(400).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const deletedProduct = await Product.findOneAndDelete({_id:id});
        res.status(201).json(deletedProduct);
    }catch(err){
        res.status(400).json(err);
    }
}