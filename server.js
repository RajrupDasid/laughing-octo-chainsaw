// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());



// importing modules
//const math = require('./math');
//destructure approach
const { add, substract,multiply, divide } = require('./math');

//console.log("The addition of math is ",math.add(5,7))
console.log("The addition of math is ",add(99,7))
console.log("The substract of math is ",substract(5,7))
console.log("The multiply of math is ",multiply(5,7))
console.log("The divide of math is ",divide(5,7))
