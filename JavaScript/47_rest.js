// Allows a function to take an indefinate number of arguments and bundle them in an array.

function sum(...args) {
    return args.reduce((add, el) => add + el);
}
