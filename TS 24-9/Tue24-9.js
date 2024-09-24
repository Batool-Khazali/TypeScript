"use strict";
// The task for today : 
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements, without using a function.
let numARR = [1, 5, 9, 13, 12, 9];
function sumAll(arr) {
    let sum = 0;
    numARR.forEach(element => {
        sum += element;
    });
    return sum;
}
;
console.log(sumAll(numARR));
console.log("////////////////////////////////");
let arrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(arrSum(numARR));
console.log("////////////////////////////////");
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print "All Positive" if true, otherwise print "Not All Positive", without using a function.
let numArr2 = [2, 8, 14, 56];
function checkPositive(arr) {
    numArr2.forEach(element => {
        if (element % 2 == 0)
            return "Not All Positive";
    });
    return "All Positive";
}
console.log(checkPositive(numArr2));
console.log("////////////////////////////////");
// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name, without using a function.
let names = ["alice", "fred", "dan", "mike", "wolf"];
function longest(arr) {
    let name = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > name.length)
            name = arr[i];
        return name;
    }
    ;
}
;
console.log(longest(names));
console.log("////////////////////////////////");
// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string, without using a function.
let str = "hello world";
let char = "l";
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char)
            count++;
    }
    return count;
}
console.log(countChar(str, char));
console.log("////////////////////////////////");
// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array, without using a function.
let numArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 || arr[i] === 3) {
            console.log(arr[i]);
        }
        for (let j = 2; j <= arr[i] / 2; j++) {
            if (arr[i] % j == 0) {
                break;
            }
            else {
                console.log(arr[i]);
            }
        }
    }
}
primeNumbers(numArr3);
console.log("////////////////////////////////");
function primeNumbers2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 || arr[i] === 3) {
            console.log(arr[i]);
            continue;
        }
        const count = arr[i];
        let isPrime = true;
        for (let j = 2; j < count; j++) {
            if (arr[i] % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && arr[i] > 1) {
            console.log(arr[i]);
        }
    }
}
primeNumbers2(numArr3);
