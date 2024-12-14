// A "good string" is a string that starts with the letter 'a' & has a length > 3.
// write a program to find if a string good or not
let str = "apple";


if (str[0] === "a" && (str.length > 3)) {
    console.log(`${str} is a Good String`);
}
else {
    console.log(`${str} is Not a Good String`);
}

