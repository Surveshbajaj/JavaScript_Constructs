const readlineSync = require("readline-sync"); // Import readline-sync

// Taking input from the user
let a = parseFloat(readlineSync.question("Enter value for a: "));
let b = parseFloat(readlineSync.question("Enter value for b: "));
let c = parseFloat(readlineSync.question("Enter value for c: "));

// Perform arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Store results in an array
let results = [result1, result2, result3, result4];

// Find maximum and minimum value
let maxValue = Math.max(...results);
let minValue = Math.min(...results);

// Display the results
console.log(`Results of expressions:`);
console.log(`1. a + b * c  = ${result1}`);
console.log(`2. a % b + c  = ${result2}`);
console.log(`3. c + a / b  = ${result3}`);
console.log(`4. a * b + c  = ${result4}`);

console.log(`\nMaximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);