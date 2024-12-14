//Initialization Of an Array-------------->
let arr = [];//Empty Array


// Creating Arrays
let name = ["Ramjan", "Joyten", "Sumit"]
let marks = [100, 99, 98];
info = ["Ramjan", 21, 5.7];

//To find length of an Array [arrayName.length]
console.log(name.length);

//To find Index---------------------------->
console.log(name[0]);//It print the '0th' position vaue of an array
console.log(name[0][0]);//It print the '0th' position values '0'th value


//Arrays are 'Mutable' in Js--------------->
let fruits = ["mango", "apple", "banana"];
fruits[0] = "litchi";

console.log(fruits);


// Array Methods ----------------------------->
let cars = ["Maruti", "Toyota", "BMW"];

// 'Push' Method is used to add to end.
cars.push("Audi");// Add to end
console.log(cars);


// 'pop' Method is used to delete from end and return it.
cars.pop();// Delete from end
console.log(cars);


// 'Unshift' Method is used to add element to start.
cars.unshift("Hyundai");// Add to Start
console.log(cars);


// 'Shift' Method is used to delete element from start and return it.
cars.shift();// Delete from Start
console.log(cars);


// 'indexOf' Method is used to return index of something.
console.log(cars.indexOf("Maruti"));// Gives the index
console.log(cars.indexOf("BMW"));// Gives the index


// 'includes' Method is used to Search for a value.
console.log(cars.includes("BMW"));// 'true'if available.
console.log(cars.includes("Audi"));// 'false'if not available.


// 'concat' Method is used to merge 2 Arrays.
let colours = ["Red", "yellow", "Green"];
console.log(cars.concat(colours));


// 'reverse' Method is used to reverse an Array.
console.log(colours.reverse());// Reversed Array
console.log(colours.reverse());// Double reverse = original Array


// 'slice' Method is used to Copies a portion of an Array.
let val = ["a", "b", "c", "d", "e", "f"];
console.log(val.slice());//it gives the slice part from front.
console.log(val.slice(-2));//it gives the slice part from end.
console.log(val.slice(2, 4));//it give the slice part from [2 to 4-1].


// 'splice' Method is used to remove/replace/add elements in place.
console.log(val.splice(4));// if we pass start value then it deletes and works like 'slice'.
console.log(val);

console.log(val.splice(0, 2));// it deletes from starting with respect to given no. of deletes.
console.log(val);

console.log(val.splice(0, 0, "a", "b"));//It push the values before the starting index.
console.log(val);


// 'sort' Method is used to sorts an Array.
// it only works with 'string' or 'characters'.
let s = ["r", "a", "m", "j", "a", "n"]

console.log(s.sort());


// Nested Arrays -> Array of Arrays------------------>
let nums = [[2, 4], [3, 6], [4, 8]];

console.log(nums[0][1]);// 4



