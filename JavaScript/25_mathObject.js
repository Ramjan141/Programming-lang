// Properties              Methods
//    Math.PI               Math.abs(n)
//    Math.E                Math.pow(a, b)
//                          Math.floor(n)
//                          Math.ceil(n)
//                          Math.random(n)


// Math.PI--------------------->
console.log(Math.PI);// it give 3.14.

// Math.E---------------------->
console.log(Math.E);// it give 2.7.

//Math.abs(n)------------------>
console.log(Math.abs(-12));// It converts the negative value to positive.

// Math.pow(a, b)-------------->
console.log(Math.pow(2, 5));// It gives the power.


//Math.floor(n)----------------->
console.log(Math.floor(12.8));// It gives the round off to nearest smallest integer.


//Math.ceil()------------------->
console.log(Math.ceil(12.2));// It gives the round off to nearest largest integer.


//Math.random()----------------->
console.log(Math.random());


// To generate Random numbers-------------------->
// Step 1---------->
let num = Math.random();

// Step 2---------->
num = num * 10; // "10" decides the range.

// Step 3---------->
num = Math.floor(num);// It round off the nearest value.

// Step 4---------->
num = num + 1; // number is generate from 0-9 so, we want 10 also that's why we add +1.

// Single line ---------------------->
// num = Math.floor(Math.random() * 10) + 1;

console.log(num);
