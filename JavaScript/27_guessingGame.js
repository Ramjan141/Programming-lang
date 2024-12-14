
let max = prompt("Enter The Range");

const num = Math.floor(Math.random() * max) + 1;
// console.log(num);

let Guess = prompt("Guess the number");

while (true) {
    if (Guess == "quit") {
        console.log("User Quit");
        break;
    }
    if (Guess == num) {
        console.log("Congratulations");
        break;
    }
    else if (Guess < num) {
        guess = prompt("your guess was too small");
    }
    else {
        guess = prompt("your guess was too Large");

    }
}


