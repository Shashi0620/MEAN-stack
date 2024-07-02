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

// number of occurance
function numberOfOccurance(arr){
  let count = {}
  for(let element of arr){
    if(count[element]){
      count[element] += 1      
     } else {
       count[element] = 1;
     }
  }
  return count;
}
console.log(numberOfOccurance([1,1,2,2,3,4,5,3]))

// common elements
function findCommonElectems(arr1,arr2){
  let commonElements = []
  for(let ele of arr1){
    if(arr2.includes(ele)){
      commonElements.push(ele);
    }
  }
  return commonElements;
}
console.log(findCommonElectems([1,2,3,4],[1,5,4,3]))

//factorial

function factorial(num){
  let fact;
  if(num === 0){
    return 1
  } else {
    fact = num * factorial(num - 1)
    return fact;
  }
}

console.log(factorial(3))

//FIBBONACCISERIES
function fibbonacciSeries(num){
  let series = [0,1];
  for(let i = 2; i<num; i++){
    series[i] = series[i-1] + series[i-2]
  }
  return series;
}

console.log(fibbonacciSeries(4))
