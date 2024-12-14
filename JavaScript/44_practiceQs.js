//Qs.1 Check if all numbers in our array are multiples of 10 or not.

let arr = [10, 20, 30, 40, 50, 70];

let final = arr.every((el) => (el % 10 == 0));
console.log(final);


//Qs2. Create a function to find the minimum nuber in an Array.
function getMin(arr) {
    let min = arr.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}
console.log(getMin(arr));

