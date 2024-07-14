// Common JS Modules

function sum (a,b){
    return a + b;
}

function diff (a,b){
    return a - b;
}

exports.sum = sum;
exports.diff = diff;


exports.sum = (a,b) => {
    return a + b;
}

exports.diff = (a,b) => {
    return a - b;
}


// ES Ecma Script Module 

const sum = (a,b) => {
    return a + b;
}

const diff = (a,b) => {
    return a - b;
}

export {sum, diff} 