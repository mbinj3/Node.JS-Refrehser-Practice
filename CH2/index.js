const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// const product = data.products[0];
const products = data.products;

// const data = {age:18}

// const server = http.createServer((req, res) => {
//     console.log("Server Started");
//     console.log(req.url);
//     res.setHeader('DummyHeader', 'DummyValue');
//     // res.setHeader('Content-Type', 'application/json');
//     // res.end(JSON.stringify(data));
//     res.setHeader('Content-Type', 'text/html');
//     res.end(index)
// })


const server = http.createServer((req, res) => {
    console.log("Server started");
    console.log(req.url);

    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2];
        const product = products.find(p => p.id == (+id));
        res.setHeader('Content-Type', 'text/html');
        const modifiedIndex = index.replace('**title**', product.title).replace('**url**', product.thumbnail).replace('**price**', product.price).replace('**rating**', product.rating);
        res.end(modifiedIndex);
        return;
    }
    
    
        

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        default:
            res.writeHead(404, 'Not Found');
            res.end();
            break;
    }    
})

server.listen(8080);