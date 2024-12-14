//Qs.1 Create a Function that gives us the average of 3 numbers.

function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);

}


//Qs.2 Create a Function that prints the multiplication table of a number.

function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}



average(5, 7, 9);
table(5);