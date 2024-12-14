//Qs.1 Create a function that returns the sum of numbers 1 to n.

function sumOfN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfN(5));

//Qs.2 Create a Function that returns the concatenation of all strings in an array.
function concatOfAll(arr) {
    let concat = "";
    for(let i = 0; i < arr.length; i++){
        concat = concat + arr[i];
    }
    return concat;
}


let arr = ["hi", "hello", "bye", "!"];
console.log(concatOfAll(arr));
