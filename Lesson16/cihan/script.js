/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

console.log("Ex.1 ");

function sumArray(numbers) {
  let sum = 0;
  // index - i , j, l, m
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    } else {
      // maybe try to convert value to a number, otherwise warn user that the value is in incorrect format
    }
  }
  console.log(sum);
}

sumArray([1, 3, "5", 7, -22, 22]);

/* 
1 - index 0 => let sum = 1;
3 - index 1
5 - index 2
6 - index 3
-22 - index 4
22 - index 5
break
*/

console.log("-------");

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
console.log("Ex.2 ");

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("The maximum number of the array is: ", max);
}

// findMax ([1,2,3,4,5])
// findMax ([100,2,3,4,5])
findMax([100, 2, -53, 4, 50]);

console.log("-------");
/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
console.log("Ex. 3");

function countOddEven(numbers) {
  let odds = 0; //let odds;
  let evens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.log("Error: please only provide numbers!");
      return;
    }

    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log("Even:", evens, "Odd:", odds);
}

countOddEven([1, 2, 3, 4, 5, 6]);

console.log("-------");

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

console.log("Ex. 4 ");

function sumRange(start, end) {
  let i = start;
  let sum = 0;
  while (start <= end) {
    sum = sum + start;
    start = start + 1;
  }
  console.log(sum);
}

sumRange(1, 3);
sumRange(-2, 5);
sumRange(-5, -1);

console.log("-------");

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

console.log("Ex. 5");

function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    reversedArray.push(currentElement);
  }
  console.log(reversedArray);
}

reverseArray(["apple", "banana", true]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

console.log("Ex. 6 ");

function filterNegative(numbers) {
  const positiveNumbers = [];
  for (i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 0) {
      const pstvNumber = numbers[i];
      positiveNumbers.push(pstvNumber);
    }
  }
  console.log(positiveNumbers);
}

filterNegative([1, 2, 13, 18, 29]);
filterNegative([1, -12, 2, 13, -37, 18, 29, -23]);

console.log("-------");

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log("Ex.7");
function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  console.log(result);
}
doubleValues([38, 25, 77, 81]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
console.log("Ex.8");

function printCharacters(str) {
  for (let chr of str) {
    console.log(chr);
  }
}

printCharacters("str");
printCharacters("printCharacters");

console.log("-------");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
console.log("Ex.9");

function sumObjectValues(obj) {
  let sum = 0;

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "number") {
      sum += value;
    }
    console.log(sum);
  }
}

sumObjectValues({ a: 3, b: 5, c: 7 });
sumObjectValues({ a: "x", b: 5, c: "y" });

console.log("-------");

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log("Ex.10");

function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: "yasar", age: 27, city: "mersin" });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Ex.11");

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;

  do {
    if (typeof numbers[i] != "number") {
      console.log("Invalid type! All elements must be number.");
      return;
    }
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(sum);
}

sumWithDoWhile([1, 3, 5]);
sumWithDoWhile([1, 3, "a", 5]);

console.log("-------");

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log("Ex.12");

function removeDuplicates(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
    console.log(newArr);
  }
}

removeDuplicates([1, 1, 2, 3, 3, "a", "b", "b"]);

console.log("-------");

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
console.log("Ex.13");

function factorial(n) {
  let fct = 1;
  for (i = 1; i <= n; i++) {
    fct = fct * i;
  }

  console.log(fct);
}

factorial(3);
factorial(5);
factorial(15);

console.log("-------");

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log("Ex.14");

function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  console.log(reversed.join(" "));
}

reverseWords("Cihan loves javascript");

console.log("-------");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Ex.15");

function filterLongWords(words, minLength) {
  let wordArr = words.split(" ");
  longWordArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > minLength) {
      longWordArr.push(wordArr[i]);
    }
  }
  console.log(longWordArr);
}

filterLongWords("Cihan is loving javascript", 5);

console.log("-------");
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log("Ex.16");

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Index: ", i, "Value: ", arr[i]);
  }
}

logElementsWithIndex(["Maya", "Mila", "Fındık"]);
logElementsWithIndex([1, 3, 5, 15]);

console.log("-------");
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Ex.17");

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("The minimum number of the array is: ", min);
}

findMin([23, 18, 41, 64, 5]);

console.log("-------");
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log("Ex.18");

function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`The word "${word}" appears ${count} times.`);
}

countOccurrences(["Maya", "Maya", "Mila", "Fındık", "Ayşecik"], "Maya");

console.log("-------");
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Ex.19");

function removeFalsyValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== false &&
      arr[i] !== 0 &&
      arr[i] !== null &&
      arr[i] !== undefined &&
      arr[i] !== "" &&
      !Number.isNaN(arr[i])
    ) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

removeFalsyValues(["", 18, 0, 15, "Cihan"]);

//Alternatively I've learned .filter(Boolean). let newArr = arr.filter(Boolean)

console.log("-------");
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Ex.20");

function sumDigits(str) {
  let totalSum = 0;

  for (i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      totalSum += Number(str[i]);
    }
  }
  console.log(totalSum);
}

sumDigits("abc123");

console.log("-------");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Ex.21");

function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (isNaN(numbers[i])) {
      console.log("Invalid type");
    }
  }
  console.log(sum / numbers.length);
}

averageArray([1, 5, 3]);
averageArray([1, 5, 3, "a"]);

console.log("-------");
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Ex.22");

function flattenArray(twoDArray) {
  let newArr = [];

  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      newArr.push(twoDArray[i][j]);
    }
  }

  console.log(newArr);
}

flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);

console.log("-------");
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Ex.23");

function findWordsWithLetter(words, letter) {
  let filteredArr = [];
  for (word of words) {
    if (word.includes(letter)) {
      filteredArr.push(word);
    }
  }
  console.log(filteredArr);
}

findWordsWithLetter(["Cihan", "loves", "Maya", "Mila"], "a");

console.log("-------");
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Ex.24");

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("after pushing the array: ", arr);

  let rmvdItem = arr.pop();
  console.log("removed item: ", rmvdItem);

  console.log("after popping the final array: ", arr);
}

pushPopExample(["Maya", "Mila", "Fındık"], "Kamber");

console.log("-------");
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log("Ex.25");

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log("After new person the queue: ", queue);

  rmvdPerson = queue.shift();
  console.log("Removed person: ", rmvdPerson);

  console.log("Final queue: ", queue);
}

manageQueue(["Maya", "Mila", "Fındık"], "Dantel");

console.log("-------");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

console.log("Ex.26");

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log("Current to-do list: ", todoList);

  todoList.splice(startIndex, deleteCount);
  console.log(`Deleted "${deleteCount}" items from list`);

  todoList.push(...newTasks);

  console.log("updated list: ", todoList);
}

updateTodoList(["get up", "walk", "breakfast", "coding"], 1, 1, "dog walk");

console.log("----THE END----");
