// String Methods

// This 'trim' method removes the extra spaces from both ends.
let name = "   Ramjan   ";
console.log(name.trim());

//'ToUpperCase' and 'ToLowerCase' Methods

let str = "Random string";

console.log(str.toUpperCase());//This methods converts all the letter to Upper Case
console.log(str.toLocaleLowerCase());//This methods converts all the letters to Lower Case


// String Methods With Arguments ----------------------->
// stringName.method(arguments)

// 'IndexOf' Method returns the first index of occurence
let str1 = "IloveCoding";

console.log(str1.indexOf("love")); // 1
console.log(str1.indexOf("j")); // -1 in case if not found
console.log(str1.indexOf("o")); // First Occurrence will show


// Method Chaining ------------------------------------->
let chain = "   Hello   ";
let newMsg = chain.trim();
console.log(newMsg);
newMsg = newMsg.toLocaleUpperCase();
console.log(newMsg);
//OR
console.log(chain.trim().toUpperCase());//Method Chaining


// 'Slice' Method returns a part of the original string as new string------->
let str2 = "Ilovecoding";

console.log(str2.slice(5));// '5' is starting index
console.log(str2.slice(1, 5));// '1' is starting idx and '4' is ending idx
console.log(str2.slice(-1));// '-1' = 'length - 1'


// 'Replace' Method search a value and returns a new string with the value replaced
let str3 = "Ilovecoding";

console.log(str3.replace("love", "do"));// Idocoding
console.log(str3.replace("I", "She"));// Shelovecoding


// 'Repeat' Method returns a string with no. of copies
let str4 = "Mango";

console.log(str4.repeat(3));










