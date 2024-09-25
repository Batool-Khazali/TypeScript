// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person {
    name: string;
    age: number;
    isAdult(): void;
};

let A: Person =
{
    name: "Alice",
    age: 100,
    isAdult() {
        if (this.age > 18)
            console.log("Adult");
        else
            console.log("Minor");
    }
};

let O: Person =
{
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

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

interface Teacher {
    name: string;
    subjects: string[];
};

let T: Teacher =
{
    name: "ada",
    subjects: ["literature", "Art", "Music"]
}

T.subjects.forEach(element => {
    console.log(element)
});

console.log(T.subjects)

console.log("/////////////////////////////////////////");


// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.

interface Products {
    name: string;
    price: number;
    quantity: number;
};

let P: Products =
{
    name: "Laptop",
    price: 1000,
    quantity: 10
};

if (P.quantity > 5) {
    P.price += P.price * 0.10;
    console.log("Price increased by 10%");
};
console.log(P);

console.log("/////////////////////////////////////////");


// Task 4 : Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
    start?(): void;
}

let D: Device =
{
    start() {
        console.log("Device has start");
    }
};

let D2: Device =
    {};

if (D.start) {
    console.log("Device a has start function");
}
else {
    console.log("Device doesn't have start function");
}

let check2 = (D2.start) ? console.log("Device has a start function") : console.log("Device doesn't a have start function");
