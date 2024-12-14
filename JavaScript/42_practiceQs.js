//Qs1. Write ana rrow function that returns the square of a number 'n'

const square = (n) => {
    return n * n;
}
//OR

const square2 = (n) => (n * n);

console.log(square(5));


//Qs2. Write a Function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("Hello World");
}, 2000)

setTimeout(() => {
    clearInterval(id)
}, 10000) 