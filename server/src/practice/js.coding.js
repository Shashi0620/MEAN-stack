/**
 * Reverse a string without functions
 * */
const prompt = require("prompt-sync")();

const reverseAString = (input) => {
    reverseString=''
    for(let i=input.length-1; i>=0; i--){
        reverseString += input[i]
    }
    console.log(reverseString)
 }
 
 var input = prompt("Enter a string?");
 reverseAString(input)
