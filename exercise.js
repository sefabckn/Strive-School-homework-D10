/*JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/
/*
let x = "John"
let y = "Doe"
console.log(x + "<>" + y)
*/
const myObject = {
    name: "sefa",
    surname: "bockun",
    email: "sefabckn@gmail.com"
}
delete myObject.email

let myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
for (strings of myArray) {
    console.log(strings)
}
/*
let emptyArray = []
for (i = 0; i <= 100; i++) {
    let generatedNumbers = Math.floor(Math.random() * i)
    emptyArray.push(generatedNumbers)
}
console.log(emptyArray)
*/

/*

let getMaxVal = function() {
    let maxValue = emptyArray[0]
    for (i = 0; i < emptyArray.length; i++) {
        if (emptyArray[i] > maxValue) {
            maxValue = emptyArray[i]
        } else() {
            Math.min(emptyArray[i])
        }
        return maxValue
    }
}

getMaxVal()*/

//array of arrays, each have 10 random numbers


let emptyArrayLast = []

for (i = 0; i < 10; i++) {
    let generateRandom = new Array(Math.floor(Math.random() * 10))
    for (j = 0; j < 10; j++) {
        emptyArrayLast.push(generateRandom)
    }
}
console.log(emptyArrayLast)

/*
function multiplyAll(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

        }
    }
   
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);*/


//Create a function that gets 2 arrays as parameters and returns the longest one