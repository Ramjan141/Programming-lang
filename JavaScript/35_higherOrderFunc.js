// Takes one or multiple functions as arguments

function multipleGreet(func, n) { // higher order Function
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 2);