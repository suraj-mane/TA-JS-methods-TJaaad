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
let evenNum = [...numbers].filter(x => x % 2 == 0);
console.log(evenNum);
// - Find all the odd numbers
let odd = [...numbers].filter(x => x % 2 !==0);
console.log(odd);
// - Place a new word at the start of the array use (unshift)
strings.unshift('sun');
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.splice(3,7));
// - Make a subset of strings array ['a','collection']
strings.splice(3,4);
// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.map((num) => {
  if(num === 12){
    return 1221;
  } else if(num === 18){
    return 1881;
  } else {
    return num;
  }
})
);
// - Replace words in strings array with the length of the word
let letter = strings.map((string) => string.length);
// - Find the sum of the length of words using above question
letter.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filtername = customers.filter((customer) => customer.firstname.startsWith("J"));
console.log(filtername);
// - Create new array with only first name
let firstName = customers.map(
  (customer) => customer.firstname
);
console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map(
  (customer) => `${customer.firstname} ${customer.lastname}`
);
console.log(fullName);
// - Sort the array created above alphabetically
[...fullName].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
 let vowelcontain = customers.filter((customer) => {
   if(
     customer.firstname.toLowerCase().includes("a") ||
     customer.firstname.toLowerCase().includes("e") ||
     customer.firstname.toLowerCase().includes("i") ||
     customer.firstname.toLowerCase().includes("o") ||
     customer.firstname.toLowerCase().includes("u") 
    ) {
      return true;
    } else {
      return false;
    }
 });
 console.log(vowelcontain);