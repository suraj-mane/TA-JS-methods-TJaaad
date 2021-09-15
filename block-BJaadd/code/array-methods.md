Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- Parameter: The string join with separator elements.
- Return: A string with all array elements joined.
- Example:
  ```js
  const element = ["Air","Fire", "Water"];
  element.join(); // 'Air,Fire,Water';
  element.join('-');  // 'Air-Fire-Water';
  const name = ["Suraj", "Mane"];
  name.element.join('');
  ```
3. `flat`
- Parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with sub-array.
- Example: 
  ```js
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  arr2.flat();
  const arr1 = [1,2,3,[5,6,7]];
  arr1.flat();
  ```
4. `push`
- Parameter: The element(s) to add to the end of the array.
- Return:  The new length property of the object upon which the method was called.
- Example: 
  ```js
  const number = [1,2,3,4,5,6];
  number.push(10);
  const element = ["suraj", "ram", "mane"];
  element.push("join");
  ```
5. `indexOf`
- Parameter: Element to locate in the array.
- Return: The first index of the element in the array; -1 if not found.
- Example: 
  ```js
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  beasts.indexOf('camel');
  const element = ['car', 'bike', 'scotter'];
  element.indexOf('scotter');
  ```
6. `lastIndexOf`
- Parameter: Element to locate in the array.
- Return: The last index of the element in the array; -1 if not found.
- Example: 
  ```js
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  beasts.indexOf('camel');
  const element = ['car', 'bike', 'scotter'];
  element.indexOf('scotter');
  ```
7. `includes`
- Parameter: The element is present in the array.
- Return: True or flase.
- Example: 
  ```js 
  const pets = ['cat', 'dog', 'bat'];
  pets.includes('dog'); // true.
  const vehicle = ['bike', 'car', 'bus'];
  vehicle.includes('bus');
  ```
8. `reverse`
- Parameter: The reversed array. Mutating the array.
- Return: The reversed array.
- Example:
  ```js
  const vehicle = ['bike', 'car', 'bus'];
  vehicle.reverse();
  const pets = ['cat', 'dog', 'bat'];
  pets.reverse();
  ```
9. `every`
- Parameter: The every method check all element is true.
- Return: true or false.
- Example: 
  ```js 
  const checkOut = (currentValue) => currentValue < 40;
  const array1 = [1, 20, 34, 25];
  array1.every(checkOut); // true
  const array2 = [30,40,45];
  array2.every(checkOut);
  ```
10. `shift`
- Parameter: The shift remove the first element of array.
- Return: The remove the element.
- Example: 
  ```js
  const array1 = [10,20,30,40];
  array1.shift(); //[20, 30, 40]
  const array2 = ['car', 'bus', 'bike'];
  array2.shift(); // ['bus', 'bike'];
  ```
11. `splice`
- Parameter: The start index and end index.
- Return: A new array containing the extracted elements.
- Example: 
  ```js 
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  beasts.splice(1); // ['bison', 'camel', 'duck', 'bison'];
  beasts.splice(2, 4);
  ```
12. `find`
- Parameter: They have need callback function.
- Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
- Exmaple:
  ```js
  const array1 = [5, 12, 8, 130, 44];
  array1.find(element => element > 10); // 12;
  const array2 = [10, 20, 30, 40];
  array2.find(element => element > 30); // 40;
  const array3 = [10, 20, 30, 40];
  array3.find(element => element > 50); // undefined;
  ```
13. `unshift`
- Parameter: The elements to add to the front of the arr.
- Return: The new length property of the object upon which the method was called.
- Example: 
  ```js
  const num1 = [4, 5, 6, 7, 8];
  num1.unshift(1, 2, 3); // [1, 2, 3, 4, 5, 6, 7, 8]
  const names = ['sun', 'jhon', 'doe', 'aim'];
  names.unshift('suraj'); // ['suraj', 'sun', 'jhon', 'doe', 'aim']
  ```
14. `findIndex`
- Parameter: A function check the element and retrun the index of all elemet are true.
- Return: The index of the first element in the array that passes the test. Otherwise, -1.
- Example: 
  ```js 
  const check = (element) => element > 20;
  const array1 = [10,13,14,15,20,30];
  array1.findIndex(check);
  ```
15. `filter`
- Parameter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
- Return: A new array with the elements that pass the test.
- Example: 
  ```js
  const num1 = [12, 14, 15, 24, 28, 30, 32];
  const checkValue = (number) => number > 15;
  num1.filter(checkValue); // [24, 28, 30, 32];
  const num2 = [12, 14, 15, 24, 28, 30, 32];
  const check = (number) => number > 30;
  num2.filter(check); // [32]
  ```
16. `forEach`
- Parameter: The forEach() method executes a provided function once for each array element.
- Return: When array is empty then output is undefined.
- Example: 
  ```js
  const num1 = [1,3,4,56,7,8,9,4,54,673,4,55];
  num1.forEach(number => console.log(number));
  const list = ['a','b','c','d','e','f','g','h','i','j','k'];
  list.forEach(element => console.log(element));
  ```
17. `map`
- Parameter: 
- Return: A new array with each element being the result of the callback function.
- Example: 
  ```js 
  const num1 = [1,2,3,4,5,6,7,8,9,10];
  num1.map(x => x *2); 
  const num1 = [1,2,3,4,5,6,7,8,9,10];
  num1.map(x => x + 2); 
18. `pop`
- Parameter: The last element remove for array.
- Return: The removed element from the array; undefined if the array is empty.
- Example: 
  ```js
  const num = [1,2,3,4,5,6,7,8,9];
  num.pop(); // 9
  const list = ['a','b','c','d'];
  list.pop(); // 'd'
  ```
19. `reduce`
- Parameter: The reduce is need callback function.
- Return: The value that results from running the “reducer” callback function to completion over the entire array.
- Example: 
  ```js
  const num2 = [1,2,3,4,5,6,7,8,9,10];
  num2.reduce((number, expersion) => number + expersion); // 155
  const list = ['a','b','c','d','f','g'];
  list.reduce((element, expersion) => element + expersion); // 'abcdfg'
  ```
20. `slice`
- Parameter: Zero-based index at which to start extraction.
- Return: A new array containing the extracted elements.
- Example: 
  ```js
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  animals.slice(1); // ['bison', 'camel', 'duck', 'elephant']
  animals.slice(1, 5); // ["bison", "camel", "duck", "elephant"]
  animals.slice(-2); // ['duck', 'elephant']
  ```
21. `some`
- Parameter: If any one value is true.
- Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
- Examples: 
  ```js
  const array = [1, 2, 3, 4, 5];
  array.some((element) => element % 2 === 0); // true 
  ```