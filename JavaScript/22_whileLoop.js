
// while (condition) {
// do something
// }


// Print the numbers from 1 to 10 using while loop.
console.log("<--------Printing 1 to 10 --------->");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Print all Odd numbers (1 to 15)
console.log("<--------Printing Odd Numbers --------->");
i = 1;
while (i <= 15) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

// Print all Even numbers (1 to 15)
console.log("<--------Printing Even Numbers --------->");
i = 1;
while (i <= 15) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// Print the Multiplication For '5'.
console.log("<--------Printing Table of 5 --------->");
i = 1;
while (i <= 10) {
    console.log(5 * i);
    i++;
}

// Nested While Loops------------------------------------>
console.log("<-------- Nested Loop --------->");
i = 1;
let j = 1;

while (i <= 3) {
    while (j <= 3) {
        console.log(j);
        j++;
    }
    i++;
}

// Guess Favourite Movie
// let favmovie = "shiddat";
// let guess = prompt("Guess Favourite Movie");;
// while ((favmovie != guess) && (guess != "quit")) {
//     guess = prompt("Wrong Guess! please try again");
// }
// if (guess == favmovie) {
//     console.log("Congrats!");
// }
// else{
//     console.log("you quit");

// }

// Break Keyword -------------------------->
console.log("<---------- Break Keyword ----------->");

i = 1;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}

