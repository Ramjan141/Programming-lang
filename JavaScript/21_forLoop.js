
//  for (initialisation; condition; updation) {
//           do something
//  }


// Print the numbers from 1 to 10 using For loop.
console.log("<--------Printing 1 to 10 --------->");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Print all Odd numbers (1 to 15)
console.log("<--------Printing Odd Numbers --------->");
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Print all Even numbers (1 to 15)
console.log("<--------Printing Even Numbers --------->");
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Print the Multiplication For '5'.
console.log("<--------Printing Table of 5 --------->");
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}


// Nested For Loops------------------------------------>
console.log("<-------- Nested Loop --------->");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

// Loops with Arrays-------------------------------->
console.log("<-------- Loop with Arrays --------->");
let fruits = ["Mango", "apple", "banana", "litchi", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);

}


//Nested Loop with Nested Arrays--------------------->
console.log("<-------- Nested Loop with Nested Arrays --------->");
let heroes = [["ironman", "spiderman", "thor",], ["superman", "wonder woman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(`<---List #${i}--->`);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}


// For of Loop ------------------------------------->

//  for (element / of / collection) {
// do something
//  }

console.log("<-------- For of Loop --------->");
console.log
let fruit = ["Mango", "apple", "banana", "litchi", "orange"];

for (fr of fruit) {
    console.log(fr);
}


// Nested For of Loop ------------------------------------->
console.log("<-------- Nested For of Loop --------->");

let hero = [["ironman", "spiderman", "thor",], ["superman", "wonder woman", "flash"]];
for (heroes of hero) {
    for (her of heroes) {
        console.log(her);
    }
}