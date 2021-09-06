Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - parameter: 
  - Return: A string convert into uppercase.(string data type)
  - Example:
    ```js
    let name = "Jhon";
    name.toUpperCase(); //"JHON";
    let surname = "Doe";
    surname.toUpperCase(); // "DOE";
    let bio = "Jhon is a good boy";
    bio.toUpperCase(); // "JHON IS A GOOD BOY"
    ```
  - `toUpperCase` The string is convert into upperCase. but not work in predefine in
  javascript.

3. `toLowerCase`
- Parameter:
- Return: A string convert into lowercase.(string data type)
- Example:
  ```js
  let name = "JHON";
  name.toLowerCase(); //"jhon";
  let surname = "DOE";
  surname.toLowerCase(); //"doe";
  let bio = "JHON IS A GOOD BOY";
  bio.toLowerCase(); // "jhon is a good boy";
  ```
4. `trim`
- Parameter: 
- Return: A trim remove the whitespace for beginning and end.
- Example: 
  ```js
  let fullName = "  Suraj   ";
  fullName.trim(); // "Suraj";
  let midName = "  Machindra  ";
  midName.trim(); // "Machindra";
  ```
5. `trimEnd`
- Parameter:
- Return: This remove the space of end.
- Example:
  ```js
  let fullName = "Suraj   ";
  fullName.trim(); // "Suraj";
  let midName = "Machindra  ";
  midName.trim(); // "Machindra";
  ```
6. `trimStart`
- Parameter:
- Return: This remove the space of beginning.
- Example:
  ```js
  let fullName = "  Suraj";
  fullName.trim(); // "Suraj";
  let midName = "  Machindra";
  midName.trim(); // "Machindra";
  ```
7. `concat`
- Parameter:
- Return: One string concatenate to other string.
- Example:
  ```js
  let firstName = "Suraj";
  let lastName = "Mane";
  firstName.concat("" lastName);
  ```
8. `endsWith`
- Prarmeter: 
- Return: Character searched at end point of string.
  ```js
  const bio = "Jhon is a good boy";
  bio.endWith('boy'); //
  const data = "Jhon is in high school";
  data.endWith("college");
  ```
9. `includes`
- Parameter: A string to be searched for within str.
- Retrun: Search string is found anywhere then true otherwise false.
- Example:
  ```js
  const bio = "Jhon is a good boy";
  bio.includes("good"); // true
  const data = "Jhon is in high school";
  data.endWith("college"); //false
  ```
10. `indexOf`
- Parameter: The string value to seraching for.
- Retrun: Retrun the string on that number.
- Example:
  ```js
  const car = "Car color is red";
  car.indexOf("is"); // 10
  const dog = "My dog name is ron";
  car.indexOf("ron"); // -1
  ```
11. `lastIndexOf`
- Parameter: A string representing the value to search for. 
- Return: The index of the last occurrence of searchValue; -1 if not found.
- Example:
  ```js
  const notBook = "Write a note";
  notBook.lastIndexOf("a"); // 8
  const book = "This is my new book";
  book.lastIndexOf("new"); // 11
  ```
12. `padEnd`
- Parameter: In padEnd the length of the str in same as a value then return as-is.
- Return: A String of the specified targetLength with the padString applied at the end of the current str.
- Example: 
  ```js
  const name = "suraj";
  name.padEnd(10,'.'); // 'suraj.....';
  const bio = "I am learn full-stack";
  bio.padEnd(25,'-');
  ```
13. `padStart`
- Parameter: The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
- Return: A String of the specified targetLength with padString applied from the start.
- Example:
  ```js
  const name = "suraj";
  name.padStart(10,'@');
  const bio = "I am learn full-stack";
  bio.padStart(25,'!');
  ```
14. `repeat`
- Parameter: The string is repeat as given number.
- Return: A new string containing the specified number of copies of the given string.
- Example: 
  ```js 
  const name = "Jhon";
  name.repeat(10); // JhonJhonJhonJhonJhonJhonJhonJhonJhonJhon'
  const bio = "Jhon is a boy";
  bio.repeat(5); // 'Jhon is a boyJhon is a boyJhon is a boyJhon is a boyJhon is a boy'
  ```
15. `replace`
- Parameter: It is replace the same string.
- Return:  A new string, with some or all matches of a pattern replaced by a replacement.
- Example: 
  ```js 
  const aim = "Inserts the portion of the string that precedes the matched substring";
  aim.replace('the','in');
  const name = "Jhon";
  name.replace('Jhon','suraj');
  ```
16. `slice`
- Parameter: It is return only you woun't string.
- Return: A new string containing the extracted section of the string.
- Example: 
  ```js 
  const line = "The following example uses slice with negative indexes.";
  line.slice(10);
  line.slice(30);
  ```
17. `split`
- Parameter: It is used for separator.
- Return: An Array of strings, split at each point where the separator occurs in the given string.
- Example: 
  ```js
  const str = 'The quick brown fox jumps over the lazy dog.';
  str.split(3);
  str.split(10);
  ```
18. `substring`
- Parameter: The starting index and ending index only show.
- Retrun: A new string containing the specified part of the given string.
- Example: 
  ```js
  const line = "Laptop is acer";
  line.substring(3, 10); // top is;
  line.substring(10,20); // acer;