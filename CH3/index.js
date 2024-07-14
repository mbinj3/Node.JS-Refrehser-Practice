const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();

server.get('/', (req, res) => {
    // res.sendStatus(404);
    // res.json(products);
    // res.send('Hello');
    // res.sendFile('E:/Web Dev P/Node JS/Node JS P2/CH3/index.html');
    // res.status(201).send('Hello');
});

server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next();
});

server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded());

server.use(morgan('default'));

const auth = (req, res, next) => {
    console.log(req.query.password);
    // console.log(req.body.password);
    // console.log(req.params);
    if(req.query.password=='123'){
        next();
    }else{
        res.sendStatus(401);
    }
}

// server.use(auth);

server.get('/', auth, (req, res) => {
    res.json({type: 'GET'});
})

server.post('/', auth, (req, res) => {
    res.json({type: 'POST'});
})

server.put('/', (req, res) => {
    res.json({type: 'PUT'});
})

server.delete('/', (req, res) => {
    res.json({type: 'DELETE'});
})

server.patch('/', (req, res) => {
    res.json({type: 'PATCH'});
})

server.listen(8080, ()=>{
    console.log("Server started");
});