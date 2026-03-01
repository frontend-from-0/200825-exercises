/*
1. Check Password Length
*/
console.log('Ex. 1');
function checkPassword(password) {
  if (password.length >= 8) {
    console.log('Password length is sufficient.');
  } else {
    console.log('Password is too short.');
  }
}
checkPassword('abcdefg');
checkPassword('asdadasdasdas');

console.log('-------');

/*
2. Uppercase Name
*/
console.log('Ex. 2');
function uppercaseName(name) {
  console.log(name.toUpperCase());
}
uppercaseName('cihan');

console.log('-------');

/*
3. Lowercase Email
*/
console.log('Ex. 3');
function normalizeEmail(email) {
  console.log(email.toLowerCase());
}
normalizeEmail("USER@Example.COM");

console.log('-------');

/*
4. Extract Domain
*/
console.log('Ex. 4');
function getDomain(email) {
  const indexOfAtSign = email.indexOf('@');
  console.log(email.substring(indexOfAtSign + 1));
}
getDomain('user@example.com');

console.log('-------');

/*
5. Check Substring
*/
console.log('Ex. 5');
function containsWord(sentence, word) {
  if (sentence.includes(word)) {
    console.log(`${word} found in sentence.`);
  } else {
    console.log(`${word} not found in sentence.`);
  }
}
containsWord('JavaScript is fun', 'fun');

console.log('-------');

/*
6. File Extension Check
*/
console.log('Ex. 6');
function checkFileExtension(filename) {
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}
checkFileExtension("test.pdf");

console.log('-------');

/*
7. Compare Numbers
*/
console.log('Ex. 7');
function compareNumbers(a, b) {
  if (a > b) console.log("a is bigger");
  else if (b > a) console.log("b is bigger");
  else console.log("Numbers are equal");
}
compareNumbers(10, 5);

console.log('-------');

/*
8. Palindrome Check
*/
console.log('Ex. 8');
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
isPalindrome('Aba');

console.log('-------');

/*
9. String Truncation
*/
console.log('Ex. 9');
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + "...");
  } else {
    console.log(text);
  }
}
truncateString("Hello World", 5);

console.log('-------');

/*
10. Check Even or Odd
*/
console.log('Ex. 10');
function evenOrOdd(number) {
  console.log(number % 2 === 0 ? "Even" : "Odd");
}
evenOrOdd(4);

console.log('-------');

/*
11. URL Protocol Checker
*/
console.log('Ex. 11');
function checkProtocol(url) {
  if (url.toLowerCase().startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("https://google.com");

console.log('-------');

/*
12. Switch: Day of the Week
*/
console.log('Ex. 12');
function getDayOfWeek(num) {
  switch (num) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
  }
}
getDayOfWeek(1);

console.log('-------');

/*
13. Repeat a String
*/
console.log('Ex. 13');
function repeatWord(word, times) {
  console.log(word.repeat(times));
}
repeatWord("Hi!", 3);

console.log('-------');

/*
14. Replace Substring
*/
console.log('Ex. 14');
function censorWord(sentence, target) {
  console.log(sentence.replaceAll(target, "****"));
}
censorWord("I hate apples", "hate");

console.log('-------');

/*
15. Check First Character
*/
console.log('Ex. 15');
function startsWithA(str) {
  if (str.charAt(0).toUpperCase() === 'A') {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Apple");

console.log('-------');

/*
16. Slice Last N Characters
*/
console.log('Ex. 16');
function sliceLastN(text, n) {
  console.log(text.slice(-n));
}
sliceLastN("Frontend", 3);

console.log('-------');

/*
17. Switch: Grade Checker
*/
console.log('Ex. 17');
function gradeChecker(score) {
  if (score >= 90) console.log("A");
  else if (score >= 80) console.log("B");
  else if (score >= 70) console.log("C");
  else if (score >= 60) console.log("D");
  else console.log("F");
}
gradeChecker(85);

console.log('-------');

/*
18. Character Replacement
*/
console.log('Ex. 18');
function replaceCharacter(str, oldChar, newChar) {
  console.log(str.replaceAll(oldChar, newChar));
}
replaceCharacter("hello", "l", "x");

console.log('-------');

/*
19. Title Case a Sentence
*/
console.log('Ex. 19');
function titleCase(sentence) {
  const result = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  console.log(result);
}
titleCase("hello world");

console.log('-------');

/*
20. Switch: Traffic Light
*/
console.log('Ex. 20');
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Caution"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid color");
  }
}
trafficLight("green");

console.log('-------');

/*
21. Check String Length
*/
console.log('Ex. 21');
function isLongString(str) {
  console.log(str.length > 10 ? "Long string" : "Short string");
}
isLongString("This is a long one");

console.log('-------');

/*
22. Convert to Lowercase Then Check
*/
console.log('Ex. 22');
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("Get free money SPAM");

console.log('-------');

/*
23. Extract Initials
*/
console.log('Ex. 23');
function getInitials(fullName) {
  const initials = fullName.split(' ').map(name => name[0].toUpperCase() + ".").join('');
  console.log(initials);
}
getInitials("John Doe");

console.log('-------');

/*
24. Switch: Month to Season
*/
console.log('Ex. 24');
function getSeason(monthNum) {
  switch (monthNum) {
    case 12: case 1: case 2: console.log("Winter"); break;
    case 3: case 4: case 5: console.log("Spring"); break;
    case 6: case 7: case 8: console.log("Summer"); break;
    case 9: case 10: case 11: console.log("Autumn"); break;
    default: console.log("Invalid month");
  }
}
getSeason(4);

console.log('-------');

/*
25. Check If String Contains Number
*/
console.log('Ex. 25');
function containsNumber(str) {
  console.log(/\d/.test(str) ? "Contains number" : "No number found");
}
containsNumber("User123");

console.log('-------');

/*
26. Pad a String
*/
console.log('Ex. 26');
function padString(str, maxLength) {
  console.log(str.padEnd(maxLength, '*'));
}
padString("Hello", 10);

console.log('-------');

/*
27. If-Else: Voting Eligibility
*/
console.log('Ex. 27');
function canVote(age) {
  console.log(age >= 18 ? "Can vote" : "Too young to vote");
}
canVote(20);

console.log('-------');

/*
28. Reverse Words in a Sentence
*/
console.log('Ex. 28');
function reverseWords(sentence) {
  const result = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  console.log(result);
}
reverseWords("Hello World");

console.log('-------');

/*
29. Check Substring Position
*/
console.log('Ex. 29');
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  console.log(index !== -1 ? index : "Not found");
}
findWordPosition("I love coding", "coding");

console.log('-------');

/*
30. Switch: Simple Calculator
*/
console.log('Ex. 30');
function calculate(a, operator, b) {
  switch (operator) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(a / b); break;
    default: console.log("Invalid operator");
  }
}
calculate(10, "*", 5);