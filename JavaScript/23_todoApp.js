let todo = [];

let req = prompt("Please enter your request.");

while (true) {
    if (req == "quit") {
        console.log("you quit!");
        break;
    }
    if (req == "list") {
        console.log("-------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }
    else if (req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Task added!");
    }
    else if (req == "delete") {
        let del = prompt("Please enter the index number to delete");
        todo.splice(del, 1);
        console.log("Task deleted!");
    }
    else {
        console.log("Wrong request");

    }
    req = prompt("Please enter your request.");

}