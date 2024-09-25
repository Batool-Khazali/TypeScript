"use strict";
// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
;
let A = {
    name: "Alice",
    age: 100,
    isAdult() {
        if (this.age > 18)
            console.log("Adult");
        else
            console.log("Minor");
    }
};
let O = {
    name: "Oz",
    age: 15,
    isAdult() {
        if (this.age > 18)
            console.log("Adult");
        else
            console.log("Minor");
    }
};
A.isAdult();
O.isAdult();
console.log("/////////////////////////////////////////");
;
let T = {
    name: "ada",
    subjects: ["literature", "Art", "Music"]
};
T.subjects.forEach(element => {
    console.log(element);
});
console.log(T.subjects);
console.log("/////////////////////////////////////////");
;
let P = {
    name: "Laptop",
    price: 1000,
    quantity: 10
};
if (P.quantity > 5) {
    P.price += P.price * 0.10;
    console.log("Price increased by 10%");
}
;
console.log(P);
console.log("/////////////////////////////////////////");
let D = {
    start() {
        console.log("Device has start");
    }
};
let D2 = {};
if (D.start) {
    console.log("Device a has start function");
}
else {
    console.log("Device doesn't have start function");
}
let check2 = (D2.start) ? console.log("Device has a start function") : console.log("Device doesn't a have start function");
