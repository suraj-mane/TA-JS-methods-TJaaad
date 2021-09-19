let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];


// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr) {
  let word = "";
  for(let i=0; i < arr.length; i++){
    if(word.length < arr[i].length){
      word = arr[i];
    }
  }
  return word;
}
console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
let num = words.map((ele) => ele.length);
console.log(num);
// - Create a new array that only contains word with atleast one vowel.
let findVowel = words.filter((wor) => {
  if(
    wor.includes("a") || 
     wor.includes("e") ||
     wor.includes("i") ||
     wor.includes("o") ||
     wor.includes("u") 
    ) {
       return true;
     } else {
       return false;
     }
});
console.log(findVowel);
// - Find the index of the word "rhythm"
let findIndex = words.indexOf("rhythm");
console.log(findIndex);
// - Create a new array that contians words not starting with vowel.
let letters = words.filter((word) => {
  if(
    !word.charAt(0).includes("a") || 
    !word.charAt(0).includes("e") ||
    !word.charAt(0).includes("i") ||
    !word.charAt(0).includes("o") ||
    !word.charAt(0).includes("u") 
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(letters);
// - Create a new array that contianse words not ending with vowel
let endVowel = words.filter((word) => {
  word.charAt(length-1);
}); 
console.log(endVowel);
//
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((sum, num) => sum + num);
console.log(sumArray);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedByThree = numbers.map((num) => num * 3);
console.log(multipliedByThree);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);
// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter((num) => num % 2 !==0);
console.log(oddNum);
// - Create a new array that should have true for even number and false for odd numbers.
let evenOdd = numbers.map((num) => num % 2 ===0);
console.log(evenOdd);
// - Sort the above number in assending order.
let assendingOrder = numbers.sort((a, b) => a - b);
console.log(assendingOrder);
// - Does sort mutate the original array?
console.log(numbers);
// YES 
// - Find the sum of the numbers in the array.
let sumOfNumber = numbers.reduce((sum, num) => sum + num);
console.log(sumOfNumber);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(num){
  let total = 0;
  for(let i=0; i < num.length; i++){
    total = num.length;
  }
  return sumOfNumber / total;
}
console.log(averageNumbers(numbers));
//
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWorld(arr) {
  let total = 0; 
  let totaladd = 0;
  for(let i =0; i<arr.length; i++){
    total += arr[i].length;
 }
 for(let j=0; j < arr;j++){
   totaladd = arr;
 }
 return totaladd;
}
console.log(averageWorld(strings));