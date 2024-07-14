const express = require('express');
const productRouter = require('./routes/product');

const server = express();

server.use(express.json());
server.use('/', productRouter.router)


server.listen(8080, () => {
    console.log("Server started");
})