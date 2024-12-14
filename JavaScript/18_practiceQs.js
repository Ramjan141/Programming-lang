//Qs1. Trim it & convert it to uppercase
let msg = "help!";

console.log(msg.trim().toUpperCase());


//Qs2. For the String -> let name = "ApnaCollege",predict the output for the following:
// name.slice(4,9)
// name.indexOf("na")
// name.replace("Apna", "Our")
let name = "Apnacollege";

console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));


//Qs3. Separate the "College" part in above string & replace 'I' with 't' in it.
let newName = name.slice(4).replace("l", "t");

console.log(newName);

