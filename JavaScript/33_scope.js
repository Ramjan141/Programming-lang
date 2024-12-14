// Scope determines the accessibility of variables, object, and functions from different parts of the code.

// Function scope
// Block scope
// Lexical scope


// Function Scope ------------------------>
// Variables defined inside a function are not accessible (visible) from outside the function.

function sum() {

    let sum = a + b;// This sum can't be accessible from outside the 'Function'.
}

// Block Scope ---------------------------->
// Variables declared inside a {} block cannot be accessed from outside the block.
{
    //This is Block scope
    let a = 5;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Lexical Scope ------------------------------>
// A variable defines outside a function can be accessible inside another function defined after the variable declaration.

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}