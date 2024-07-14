const express = require('express');
require('dotenv').config();
const productRouter = require('./routes/product');
const mongoose = require('mongoose');




const server = express();

main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
}



server.use(express.json());
server.use('/', productRouter.router)


server.listen(process.env.PORT, () => {
    console.log("Server started");
})