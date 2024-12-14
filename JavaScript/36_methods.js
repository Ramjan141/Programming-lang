// Actions that can be performed on an object

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};

console.log(calculator.add(5,2));
console.log(calculator.sub(4,2));
console.log(calculator.mul(7,2));
