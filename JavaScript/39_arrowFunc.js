// const func = (arg1,arg2..) => {function defination }

const sum = (a, b) => {
    console.log(a + b);
};

const cube = (n) => {
    return n * n * n;
};

const pow = (a, b) => {
    return a ** b;
};


// const func = (arg1,arg2..) => (function defination)

const mul = (a, b) => (a * b);


// 'This' keyword with Arrow Functions

let student = {
    name: "Ramjan",
    marks: 99,
    prop: this, // Global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => { // Lexical scope
        console.log(this); // Parent's scope
        return this.marks;

    }
};

const a = 5; // Global scope