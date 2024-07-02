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

 function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
 
// remove duplicates
 function findDuplicate(arr){
  let duplicateValue = []
  for(let i=0; i<=arr.length-1; i++){
    if(!duplicateValue.includes(arr[i])){
       duplicateValue.push(arr[i]);
     }
  }
  return duplicateValue;
}

console.log(findDuplicate([1,1,2,3,2,3]))

//palindrome
function palindrome(str){
  let reversedString =''
  for(let i=str.length-1; i>=0; i--){
    reversedString += str[i]
  }
  if(str == reversedString){
    return `${str} is palindrome`
  } else {
  return `${str} is not palindrome`
    
  }
}
console.log(palindrome('racecar'))



