const student = {
    name: "Ramjan",
    age: 21,
    marks: 95,
    city: "dhanbad"
}


let delhi = {
    latitude: "28.7041",
    longitude: "77.1025"
}


let item = {
    price: 100.50,
    discount: 30,
    colors: ["red", "blue", "green"]
}

// Creating twitter post
let post = {
    username: "@ramjan",
    content: "Hello Everyone",
    likes: 122,
    reposts: 33,
    tags: ["@joyten", "@sumit", "aniket", "aryan"]
}

console.log(student);
console.log(delhi);
console.log(item);
console.log(post);

// Get values -------------------------------->
let students = {
    name: "Ramjan",
    marks: 95.5
};
// To print whole student data then -------------->
console.log(students);

// To print a particular data then --------------->
console.log(students["name"]);// here we have to pass the 'key' as 'strings' to access the value.
console.log(students.name);// here we use '.' operator to access the value.


// To Add/ Update value------------------------>
const studentss = {
    name: "Ramjan",
    age: 21,
    marks: 95.5,
    city: "dhanbad"
};

studentss.city = "Asansol";// Property value changed
studentss.gender = "Male";// New Properties Added
studentss.marks = "A";

console.log(studentss);
delete studentss.gender;// To delete 
console.log(studentss);


// Object of Objects (Nested Objects)------------------>
const classInfo = {
    ramjan: {
        grade: "A",
        city: "Dhanbad"
    },
    joyten: {
        grade: "B",
        city: "Asansol"
    },
    sumit: {
        grade: "C",
        city: "Maithan"
    }
}
console.log(classInfo);


// Array of Objects ----------------------------->
const classInf = [
    {
        name: "Ramjan",
        grade: "A",
        city: "Dhanbad"
    },
    {
        name: "Joyten",
        grade: "B",
        city: "Asansol"
    },
    {
        name: "sumit",
        grade: "C",
        city: "Maithan"
    }
]

// To print single student data-------------->
console.log(classInf[0]);// Single student data

// To print a particular data ----------------->
console.log(classInf[0].name);





