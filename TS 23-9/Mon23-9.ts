// 1- Identify if a Number is Even or Odd
// You are given a variable num. Check whether the number is even or odd without using a function.


////////////////////////////////////////////////////////////////////////////// test function doesn't work properly for now
// function checkEvenOdd()
// {
//     let num1: number = Number(document.getElementById("evenoddinput")?.textContent) ;
//     let result = document.getElementById("numresult")?.textContent;

//     if (num1 % 2 == 0) {
//         result += "The number is even." ;
//         console.log(result);

//     } else {
//         result += "The number is odd." ;
//         console.log(result);

//     }
    
// }


let num2: number = 7;
// let num2: number = 22;

if (num2 % 2 == 0) {
    console.log("The number is even.");
} else {    
    console.log("The number is odd.");
}





// 2- Filter Expensive Products from an Array : 
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.


let priceARR: number[] = [2.5, 55, 31.1, 15.9];

let thresholdPrice: number = 30;

for (let i = 0; i < priceARR.length; i++ )
{
    if (priceARR[i] > thresholdPrice)
    {
        console.log(priceARR[i]); 
    }
}



// 3- Find the Oldest Admin
// You have an array of user objects, where each user has the properties name, age, and isAdmin. Find and print the name of the oldest admin, without using a function.


let users: {name: string, age: number, isAdmin: boolean}[] = [
    {name: "John Doe", age: 30, isAdmin: true},
    {name: "Jane Smith", age: 25, isAdmin: false},
    {name: "Bob Johnson", age: 40, isAdmin: true},
    {name: "Alice Wilson", age: 28, isAdmin: false}
 
];

let oldestAdminAge: number = 0;

users.forEach(element => {
    if (element.isAdmin == true)
        {
            if (element.age > oldestAdminAge)
                {
                    oldestAdminAge = element.age;
                }
        }
});

console.log("The oldest admin age is ", oldestAdminAge);





