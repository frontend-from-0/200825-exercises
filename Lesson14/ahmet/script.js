/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;
console.log('Ex. 1:', 'Sum of the numbers: ', firstNumber + secondNumber);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
let userName = 'Ahmet';
let userAge = 20;
// String concatination
console.log(
  'Ex. 2:',
  'Hello! I am ' + userName + ' and I am ' + userAge + ' years old.',
);
userName = 'Jane';
userAge = 40;
console.log(
  'Ex. 2:',
  'Hello! I am ' + userName + ' and I am ' + userAge + ' years old.',
);
// `string text ${expression} string text`
console.log('Ex. 2:', `Hello! I\'m ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
const a = 10;
const b = 4;

console.log('Ex. 3:', 'a-b=', a - b, 'a*b=', a * b, 'a/b=', a / b);

// 4. Use template literals to log: "My name is (userName). I like JS."

userName = 'Omer';
console.log('Ex.4', `My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
let password = 'securePass';
console.log('Ex. 5:', 'The length of password is ', password.length);

password = '123';
console.log('Ex. 5:', 'The length of password is ', password.length);

// 6. Convert the string "hello world" to uppercase and log it.
const originalText = 'hello world';
const upperCaseText = originalText.toUpperCase();

console.log(
  'Ex.6',
  originalText,
  `The uppercase version of the original text is: ${upperCaseText}`,
);

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
const greeting1 = "Hello";
const greeting2 = "World";
console.log('Ex.7', greeting1.concat(" ", greeting2));

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
const x = 42; 
console.log('Ex.8', 'the type of variable: ', typeof(x));

// 9. Convert the number 100 to a string and log the result.
const number = 100;
console.log('Ex.9', number, number.toString());
console.log('Ex.9', number, ""+number);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
const stValue = "50";
const nmValue = parseInt(stValue);
console.log("Ex. 10", "Type of that expression: ", typeof nmValue, Number(stValue));

// 11. Generate a random integer between 0 and 10 and log it.
const randomNumberWithRound = Math.round(Math.random() * 10);

// 5 to 15 including
const randomNumber = Math.floor(Math.random() * 11) + 5;

// 4 to 15
const randomrNumber4To15 = Math.floor(Math.random() * 12) + 4;
// 15 - 4  = 11 (find random number between 0 and 11, then add 4 to the result)
const randomNumber15Minus4 = Math.floor(Math.random() * (15 - 4 + 1)) + 4;

// 0 - 0.9999 
const randomNumber0to1 = Math.floor(Math.random());
// 0 - 9.99999 (multiplied by 10)
const randomNumber0tomultiplied = Math.floor(Math.random() * 10);
// 0 - 10.99 (multiplied by 11)
const randomNumber0to11 = Math.floor(Math.random() * 10) + 1;


const randomNumber4To15 = Math.floor(Math.random() * 12) + 4;
console.log('Ex.11', 'randomNumber 5 to 15:', randomNumber, 'random number with round:', randomNumberWithRound, 'a random number 4 to 15:', randomrNumber4To15, 'a random number between 0-11 and added 4:', randomNumber15Minus4, 'a random number:', randomNumber0to1, 'a random number multiplied 10:', randomNumber0tomultiplied, 'a random number multiplied 11:', randomNumber0to11);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
const d = Math.floor(3.7);
const u = Math.ceil(3.2);
console.log('Ex.12', 'rounded down number 3.7 is:', d, 'rounded up number 3.2 is:', u);

// 13. Declare a boolean variable isStudent = true. Log it.
const isStudent = true;
console.log('Ex.13', 'Is the user a student?', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0; 
counter++;

// counter++ uses postfix increment (do operation first, then increment)
// ++counter uses prefix increment (increment first, than do any operations)

console.log('Ex.14', 'Counter after increment:', counter);
console.log('counter', 2+3);
console.log('counter', counter);


// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points+=5;
console.log('Ex.15', 'after added 5 to 10:', points );

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
let name = "Alice";
let age = (30);
let city = "Paris";
console.log('Ex.16', `${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
const x1 = 5;
const y = 10;
const z = 15;
console.log('Ex.17', 'x+y+z=', x1 + y + z);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
const dividend = 10;
const divisor = 3;
console.log('Ex.18', 'divisionResult:', dividend / divisor , 'differenceResult:', dividend - divisor );

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
let firstName = "Ahmet";
let lastName = "YAYIK"
console.log('Ex.19', 'fullName =', firstName + " " + lastName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
const firstFactor = 7;
const secondFactor = 2;
console.log('Ex.20', 'Product: ', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
let p = Math.PI;
console.log('Ex.21', 'Number PI= ', p);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
let counter2 = 0;
counter2++;
console.log('Ex.22', 'After counter2++:', counter2);
counter2+= 1;
console.log('Ex.22', 'After counter2+= 1:', counter2);
counter2= counter2+1;
console.log('Ex.22', 'After counter2=counter2+1:', counter2);



// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature+=5;
console.log('Ex.23', 'Today is weather:', initialTemperature, 'Celcius degree.' );

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx9 = 6;
let incrementedValue = ++numberEx9;
console.log('Ex.24', 'numberEx9 after ++:', numberEx9);
console.log('Ex.24', 'incremented value:', incrementedValue);


// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
let numberEx10 = 8;
let incrementedValue2 = numberEx10++;
console.log('Ex.25', 'Original numberEx10:', numberEx10 - 1);
console.log('Ex.25', 'numberEx10 incremented value after postfix ++:', incrementedValue2);
console.log('Ex.25', 'numberEx10 after postfix ++:', numberEx10);



// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx11 = -3;
const incrementedValue3 = ++numberEx11 * 2;
console.log('Ex.26', 'Multiplied value:', incrementedValue3);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
 let q = 2; 
 const incrementedValue4 = ++q;
 const w = 3;
 const finalValue = incrementedValue4 + w;
 console.log('eX.27', 'final value is:', finalValue);
