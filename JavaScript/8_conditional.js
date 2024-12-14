let age = 18;
// If Statement------------------------------->
if (age >= 18) {
    console.log("You Can vote!");
}

// If-else Statement--------------------------->
if (age >= 18) {
    console.log("You Can vote!");
} else {
    console.log("You are not eligible!");
}

// else-if Statement---------------------------->
marks = 99;
if (marks >= 90) {
    console.log("A+");
} else if (marks > 70) {
    console.log("A");
}
else if (marks >= 50) {
    console.log("B");
}
else if (marks >= 33) {
    console.log("C");
}
else if (marks < 33) {
    console.log("Fail");
}

// Nested If-else--------------------------------->
if (marks >= 33) {
    if (marks >= 80) {
        console.log("O");
    }
    else {
        console.log("A");
    }
}
else {
    console.log("better luck next time!");
}


// Switch Statement------------------------------->
let color = "yellow";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
        default:
            console.log("Broken light");
}