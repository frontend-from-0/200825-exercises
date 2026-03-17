/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

// Exercise 1:
// Calculate the sum of all numbers in the given array.

console.log("Ex. 1:");
const numbersEx1 = [1, 2, 3, 4, 5];
const sum = numbersEx1.reduce((acc, currentVal) => acc + currentVal);
console.log("The total is: ", sum);

console.log("----------------");

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)

console.log("Ex. 2:");
const numbersEx2 = [8, 3, 11, 6, 4];
const max = numbersEx2.reduce(
  (acc, currentVal) => Math.max(acc, currentVal),
  -Infinity,
);
console.log("The maximum is: ", max);

console.log("----------------");

// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.

console.log("Ex. 3:");
const elements = ["a", "b", "a", "c", "b", "a"];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(elementCounts); // Output: { a: 3, b: 2, c: 1 }

console.log("-----------------");

// Exercise 4:
// Calculate the average of all numbers in the given array.

console.log("Ex. 4.");
const numbersEx4 = [10, 20, 30, 40, 50];

const average =
  numbersEx4.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  ) / numbersEx4.length;

console.log("The average is: ", average);

console.log("-----------------");

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.

console.log("Ex. 5:");
const numbers = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []).length;

console.log("The number of unique elements is: ", uniqueCount);
