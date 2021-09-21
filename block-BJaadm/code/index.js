let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map((ele) => (ele.sex));
console.log(peopelName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((ele) => (ele.grade));
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((ele) => ele.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = persons.filter((arr) => {
  if(
    arr.name[0] === "J"||
    arr.name[0] === "P"
  ){
    console.log(arr.name);
  }
});
console.log(filterName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterNameLength = persons.filter((arr) => {
  if(
    arr.name[0] === "A"||
    arr.name[0] === "C"
  ){
    console.log(arr.name.length);
  }
});
console.log(filterNameLength);
// Log all the filtered male ('M') in persons array
let filterMale = persons.filter((arr) => {
  if(arr.sex === "M") {
    console.log(arr.name);
  }
});
console.log(filterMale);
// Log all the filtered female ('F') in persons array
let filterFemale = persons.filter((arr) => {
  if(arr.sex === "F") {
      console.log(arr.name);
  }
});
console.log(filterFemale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterFemaleName = persons.filter((arr) => {
  if(
    arr.name[0] == "C" ||
    arr.name[0] == "J" ||
    arr.sex === "F" )
    {
    console.log(arr.name);
  }
});
   console.log(filterFemaleName);
// Log all the even numbers from peopleGrade array
let evenGrade = persons.filter((arr) => {
  if(
    arr.grade % 2 === 0
  ){
    console.log(arr.grade);
  }
});
console.log(evenGrade);
// Find the first name that starts with 'J' in persons array and log the object
let firstObj = persons.filter((arr) => {
  if(
    arr.name[0] === "J"
  ){
    return arr.name;
  }
});
console.log(firstObj);
// Find the first name that starts with 'P' in persons array and log the object
let firstObjP = persons.filter((arr) => {
  if(
    arr.name[0] === "P"
  ){
    return arr.name;
  }
});
console.log(firstObjP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = [];
persons.filter((arr) => {
  if(
    arr.sex === "F"
  ){
    femalePersons.push(arr.sex);
  }
});
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = [];
persons.filter((arr) => {
  if(
    arr.sex === "M"
  ){
    malePersons.push(arr.sex);
  }
});
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let Total = persons.map((ele) => ele.grade
);
let gradeTotal = Total.reduce((acc, cv) =>  acc + cv);
console.log(gradeTotal);
// Find the average grade
let aver = persons.map((ele) => ele.grade);
let averageGreade = aver.reduce((acc, cv) => acc + cv / aver.length);
console.log(averageGreade);  
// Find the average grade of male
let maleS = []; 
persons.filter((arr) => {
  if(
    arr.sex === "M"
  ){
    maleS.push(arr.grade);
  }
 });
let averageGrade = maleS.reduce((acc, cv) => acc + cv / maleS.length);
console.log(averageGrade);
// Find the average grade of female
let femaleS = [];
persons.filter((arr) => {
  if(
    arr.sex === "F"
  ){
    femaleS.push(arr.grade);
  }
});
let averageFemaleS = femaleS.reduce((acc, cv) => acc + cv / femaleS.length);
console.log(averageFemaleS);
// Find the highest grade
let highestGrade = aver.sort((a, b) => a - b);
console.log(highestGrade);
// Find the highest grade in male
let highestGradeMale = maleS.sort((a, b) => a - b);
console.log(highestGradeMale);
// Find the highest grade in female
let highestGradeFemale = femaleS.sort((a, b) => a - b);
console.log(highestGradeFemale);
// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ascendingGrade = aver.sort((a, b) => a - b);
console.log(ascendingGrade); 
// Sort the peopleGrade in descending order
let descendingGrade = aver.sort((a, b) => b - a);
console.log(descendingGrade); 
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let descendingNot = [...aver].sort((a, b) => b - a);
// Sort the array peopelName in ascending `ABCD..Za....z`
let peoplename = persons.map((ele) => ele.name);
let peopleName = peoplename.sort();
console.log(peopleName);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let peopleNames = [...peoplename].sort();
console.log(peopleNames);