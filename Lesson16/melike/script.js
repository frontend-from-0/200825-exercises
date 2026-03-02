/*
1. Sum Array Elements with a For Loop
*/
console.log('Ex.1 ');
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  }
  console.log('Final sum:', sum);
}
sumArray([1, 3, 5, 7, -22, 22]);

console.log('-------');

/*
2. Find Maximum Number in an Array
*/
console.log('Ex.2 ');
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log('The maximum number is:', max);
}
findMax([100, 2, -53, 4, 50]);

console.log('-------');

/*
3. Count Odd and Even Numbers
*/
console.log('Ex. 3');
function countOddEven(numbers) {
  let odds = 0;
  let evens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') continue;
    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log('Even:', evens, 'Odd:', odds);
}
countOddEven([1, 2, 3, 4, 5, 6]);

console.log('-------');

/*
4. Sum of Numbers in a Range (While Loop)
*/
console.log('Ex. 4');
function sumRange(start, end) {
  let sum = 0;
  let current = start;
  while (current <= end) {
    sum += current;
    current++;
  }
  console.log('Sum in range:', sum);
}
sumRange(1, 5);

console.log('-------');

/*
5. Reverse an Array
*/
console.log('Ex. 5');
function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log('Reversed array:', reversedArray);
}
reverseArray(['apple', 'banana', true]);

console.log('-------');

/*
6. Filter Out Negative Numbers
*/
console.log('Ex. 6');
function filterNegative(numbers) {
  const positiveNumbers = [];
  for (let num of numbers) {
    if (num >= 0) positiveNumbers.push(num);
  }
  console.log('Filtered positive numbers:', positiveNumbers);
}
filterNegative([1, -2, 3, -4, 5]);

console.log('-------');

/*
7. Double the Values (For-of Loop)
*/
console.log('Ex.7');
function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  console.log('Doubled values:', result);
}
doubleValues([38, 25, 77, 81]);

console.log('-------');

/*
8. Print Each Character of a String (For-of)
*/
console.log('Ex. 8');
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters('Hello');

console.log('-------');

/*
9. Sum All Values in an Object
*/
console.log('Ex. 9');
function sumObjectValues(obj) {
  let total = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      total += obj[key];
    }
  }
  console.log('Total object sum:', total);
}
sumObjectValues({ a: 10, b: 20, c: 5 });

console.log('-------');

/*
10. Print Keys of an Object (For-in)
*/
console.log('Ex.10');
function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: 'yasar', age: 27, city: 'mersin' });

console.log('-------');

/*
11. Sum Array Using do-while Loop
*/
console.log('Ex. 11');
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  if (numbers.length > 0) {
    do {
      sum += numbers[i];
      i++;
    } while (i < numbers.length);
  }
  console.log('Do-while sum:', sum);
}
sumWithDoWhile([10, 20, 30]);

console.log('-------');

/*
12. Remove Duplicates from an Array
*/
console.log('Ex. 12');
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  console.log('Unique array:', uniqueArr);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log('-------');

/*
13. Calculate Factorial (For Loop)
*/
console.log('Ex. 13');
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial of ${n}:`, result);
}
factorial(5);

console.log('-------');

/*
14. String -> Array -> String
*/
console.log('Ex. 14');
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversed = words.reverse().join(' ');
  console.log('Reversed sentence:', reversed);
}
reverseWords('JavaScript is fun');

console.log('-------');

/*
15. Filter Words Longer Than X
*/
console.log('Ex. 15');
function filterLongWords(words, minLength) {
  const result = [];
  for (let word of words) {
    if (word.length >= minLength) result.push(word);
  }
  console.log('Long words:', result);
}
filterLongWords(['apple', 'kiwi', 'banana', 'pear'], 5);

console.log('-------');

/*
16. Log Array Elements with Their Indices
*/
console.log('Ex. 16');
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(['A', 'B', 'C']);

console.log('-------');

/*
17. Find the Smallest Number in an Array
*/
console.log('Ex. 17');
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  console.log('Smallest number:', min);
}
findMin([10, 5, 8, 2, 12]);

console.log('-------');

/*
18. Count Occurrences of a Word in an Array
*/
console.log('Ex. 18');
function countOccurrences(arr, word) {
  let count = 0;
  for (let item of arr) {
    if (item === word) count++;
  }
  console.log(`"${word}" count:`, count);
}
countOccurrences(['apple', 'banana', 'apple'], 'apple');

console.log('-------');

/*
19. Remove Falsy Values
*/
console.log('Ex. 19');
function removeFalsyValues(arr) {
  const result = [];
  for (let val of arr) {
    if (val) result.push(val);
  }
  console.log('Cleaned array:', result);
}
removeFalsyValues([0, 1, false, 2, "", null]);

console.log('-------');

/*
20. Sum of All Digits in a String
*/
console.log('Ex. 20');
function sumDigits(str) {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(parseInt(char))) sum += parseInt(char);
  }
  console.log('Sum of digits:', sum);
}
sumDigits("abc123");

console.log('-------');

/*
21. Average of Array Elements
*/
console.log('Ex. 21');
function averageArray(numbers) {
  let sum = 0;
  for (let num of numbers) sum += num;
  console.log('Average:', sum / numbers.length);
}
averageArray([10, 20, 30, 40]);

console.log('-------');

/*
22. Flatten a 2D Array (Nested Loops)
*/
console.log('Ex. 22');
function flattenArray(twoDArray) {
  const flat = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flat.push(twoDArray[i][j]);
    }
  }
  console.log('Flattened:', flat);
}
flattenArray([[1, 2], [3, 4]]);

console.log('-------');

/*
23. Find Words Containing a Letter
*/
console.log('Ex. 23');
function findWordsWithLetter(words, letter) {
  const filtered = [];
  for (let word of words) {
    if (word.includes(letter)) filtered.push(word);
  }
  console.log('Filtered words:', filtered);
}
findWordsWithLetter(['apple', 'banana', 'kiwi'], 'a');

console.log('-------');

/*
24. Push and Pop Operations
*/
console.log('Ex. 24');
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log('After push:', arr);
  const popped = arr.pop();
  console.log('Popped element:', popped);
  console.log('Final array:', arr);
}
pushPopExample([1, 2, 3], 4);

console.log('-------');

/*
25. Push and Shift Operations
*/
console.log('Ex. 25');
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log('Updated queue:', queue);
  const removed = queue.shift();
  console.log('Removed person:', removed);
  console.log('Final queue:', queue);
}
manageQueue(['Alice', 'Bob'], 'Charlie');

console.log('-------');

/*
26. To-Do List Application
*/
console.log('Ex. 26');
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('Current list:', todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log('Updated list:', todoList);
}
updateTodoList(['Study JS', 'Eat breakfast', 'Walk dog'], 1, 1, 'Clean room');