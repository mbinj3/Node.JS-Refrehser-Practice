const fs = require('fs');


const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllProducts = (req, res) => {
    res.json(products);
}

exports.getProduct = (req, res) => {
    console.log(req.params);
    const id = +req.params.id
    const product = products.find(p => p.id === id);
    res.json(product);
}

exports.replaceProduct = (req, res) => {
    console.log(req.body);
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex,1, {...req.body, id:id})
    res.status(201).json();
}

exports.updateProduct = (req, res) => {
    console.log(req.params);
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex,1, {...product, ...req.body});
    res.status(201).json();
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json(product);
}