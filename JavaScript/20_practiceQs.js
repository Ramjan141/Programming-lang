//Qs1. For the given start state of an array.Change it to final form using methods.
let months = ['january', 'july', 'march', 'august'];

// Final -> ['july', 'june' 'march', 'august']
months.shift();// Delete 'january' from start
months.shift();// Delete 'july' from start

months.unshift("july", "june");// Add to start 'june' and 'july'
console.log(months);

//Qs2. For the given start state of an array.Change it to final form using splice.
let months2 = ['january', 'july', 'march', 'august'];

// Final -> ['july', 'june' 'march', 'august']
months2.splice(0, 2, "july", "june");//Using Splice
console.log(months2);


//Qs3. Return the index of the "javascript" from the given array, if it was reversed.
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
lang = lang.reverse();
console.log(lang.indexOf("javascript"));


//Qs4. Create a nested array to show the following tic-tac toe game state.
//  X       O
//      X
//  O       X 

let tic_tac = [["X", null, "O"],
               [null, "X", null],
               ["O", null, "X"]];

console.log(tic_tac);
