const lib = require('./lib.js');

console.log(lib.sum(5,5), lib.diff(5,5));

import {sum, diff} from './lib.js';

console.log(sum(10,10), diff(10,10));

const fs = require('fs');

const txt = fs.readFileSync('demo.txt', 'utf-8');
console.log(txt);

fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    console.log(txt);
})
