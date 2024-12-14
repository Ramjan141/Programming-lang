// This keyword refers to an object that is executing the current piece of code.

const student = {
    name: "Ramjan",
    age: 21,
    eng: 82,
    math: 81,
    phy: 86,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    },
};

