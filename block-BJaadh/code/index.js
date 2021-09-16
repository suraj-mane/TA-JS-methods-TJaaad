// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.indexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance");
console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
const div = (num) => num % 3 === 0;
console.log(numbers.every(div));
// -  Sort Array from smallest to largest
console.log(numbers.sort((a, b) => a - b));
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
var largests = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] >largests){
    largests=numbers[i];
  }
}
console.log(largests);
// - Find longest string in strings
var largest = strings.sort(function(a,b){ return b.length - a.length});
console.log(largest);
// - Find all the even numbers
let evenNum = numbers.filter(x => x % 2 == 0);
console.log(evenNum);
// - Find all the odd numbers
let odd = numbers.filter(x => x % 2 !==0);
console.log(odd);
// - Place a new word at the start of the array use (unshift)
strings.unshift('sun');
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
// numbers.replace(12 , 1221);
// numbers.replace(18 , 1881);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
function firstame(){
  for(let x of customers){
    x.firstname.startsWith("J");
  }  
}

// - Create new array with only first name
let newArray = [];
for(let names of customers){
  newArray.push(names.firstname);
}
console.log(newArray);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
for(let names of customers){
  fullName.push(names.firstname + " " + names.lastname);
}
console.log(fullName);
// - Sort the array created above alphabetically
console.log(fullName.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
console.log(newArray.splice(""));