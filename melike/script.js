/* Topic: JavaScript Basics
Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;
console.log('Ex. 1:', 'Sum of the numbers: ', firstNumber + secondNumber);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
let userName = 'Melike';
let userAge = 25;
console.log('Ex. 2:', `Hello! I am ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
const a = 10;
const b = 4;
console.log('Ex. 3:', 'a-b=', a - b, 'a*b=', a * b, 'a/b=', a / b);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log('Ex. 4:', `My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
let password = 'securePass';
console.log('Ex. 5:', 'The length of password is ', password.length);

// 6. Convert the string "hello world" to uppercase and log it.
const originalText = 'hello world';
console.log('Ex. 6:', originalText.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
const word1 = "Hello";
const word2 = "World";
console.log('Ex. 7:', word1 + " " + word2);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
let x = 42;
console.log('Ex. 8:', typeof x);

// 9. Convert the number 100 to a string and log the result.
const number100 = 100;
console.log('Ex. 9:', number100.toString());

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
const stValue = "50";
const nmValue = Number(stValue);
console.log("Ex. 10:", "Type:", typeof nmValue, "Value:", nmValue);

// 11. Generate a random integer between 0 and 10 and log it.
const randomTen = Math.floor(Math.random() * 11);
console.log('Ex. 11:', 'Random 0-10:', randomTen);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
console.log('Ex. 12:', 'Floor 3.7:', Math.floor(3.7), 'Ceil 3.2:', Math.ceil(3.2));

// 13. Declare a boolean variable isStudent = true. Log it.
let isStudent = true;
console.log('Ex. 13:', 'Is student:', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
counter++;
console.log('Ex. 14:', 'Counter:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5;
console.log('Ex. 15:', 'Points:', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const nameEx16 = "Alice";
const ageEx16 = 30;
const cityEx16 = "Paris";
console.log('Ex. 16:', `${nameEx16} (${ageEx16}) lives in ${cityEx16}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
let x17 = 5, y17 = 10, z17 = 15;
console.log('Ex. 17:', 'Total sum:', x17 + y17 + z17);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
let dividend = 10;
let divisor = 3;
let divisionResult = dividend / divisor;
let differenceResult = dividend - divisor;
console.log('Ex. 18:', 'Quotient:', divisionResult, 'Difference:', differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
let firstName = "Melike";
let lastName = "Ak";
console.log('Ex. 19:', 'Full Name:', firstName + " " + lastName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
let firstFactor = 7;
let secondFactor = 2;
console.log('Ex. 20:', 'Product:', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
console.log('Ex. 21:', 'Math.PI:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
let counter22 = 0;
counter22++;
console.log('Ex. 22 (1):', counter22);
counter22 += 1;
console.log('Ex. 22 (2):', counter22);
counter22 = counter22 + 1;
console.log('Ex. 22 (3):', counter22);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex. 23:', 'Temperature:', initialTemperature);

// 24. Declare numberEx24=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx24 = 6;
console.log('Ex. 24:', 'Prefix increment:', ++numberEx24);

// 25. Declare numberEx25=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
let numberEx25 = 8;
console.log('Ex. 25:', 'Original:', numberEx25++, 'After postfix:', numberEx25);

// 26. Declare numberEx26=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx26 = -3;
let result26 = (++numberEx26) * 2;
console.log('Ex. 26:', 'Final result:', result26);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
let a27 = 2;
let b27 = 3;
console.log('Ex. 27:', 'Result:', (++a27) + b27);