// forEach
// map
// filter
// every
// some
// reduce

// forEach Method--------------->
// arr.forEach(some function defination or name)
console.log("<----------forEach---------->");

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};

//OR

arr.forEach(function (el) {
    console.log(el);
});

console.log("<----------OR---------->");
arr.forEach(print)


// Array of Objects in forEach---------------->
console.log("<----------Array of Objects in forEach---------->");
let arr1 = [{
    name: "Ramjan",
    marks: 98
},
{
    name: "Kaniz",
    marks: 99
},
{
    name: "Sahista",
    marks: 97
}];

arr1.forEach((student) => {
    console.log(student.marks);
});


// Map Function ------------------------>
// It takes all element and change the value and stores into new Array.
console.log("<----------Map Function---------->");
// let newArr = arr.map(some function definatio or name);

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});
console.log(double);


// To convert 'arr1' marks into CGPA using map.

let cgpa = arr1.map((el) => {
    return el.marks / 10;
});

console.log("<----------Convert 'arr1' marks into CGPA using MAP---------->");
console.log(cgpa);




// Filter Function ------------------------>
// In Filter function if the condition is true the the value adds to a new Array.
// let newArr = arr.filter(some function definition or name);
console.log("<----------Filter Function---------->");

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let even = nums.filter((el) => {
    return el % 2 == 0;
});
console.log(even);




// Every Function ------------------------>
// Returns true if every element of array gives true for some function. Else returns false.
// arr.every(some function definition or name);
console.log("<----------Every Function---------->");

let arr2 = [2, 4, 6];

console.log(arr2.every((el) => (el % 2 == 0)));


// Some Function ------------------------>
console.log("<----------Some Function---------->");
// Its works like Logical OR operator.If one condition is true then it gives 'true'
console.log(arr2.every((el) => (el % 2 == 0)));




// Reduce Function ------------------------>
// Reduces the Array to a single value.
// arr.reduce( reducer function with 2 variables for ( accumulator, element));

arr = [1, 2, 3, 4];

let finalVal = arr.reduce((res, el) => (res + el));
console.log(finalVal);


console.log("<----------Find Max in Array Reduce Function---------->");
arr = [1, 2, 4, 6, 3, 7, 0, 9, 8, 11, 33, 1];

let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);



