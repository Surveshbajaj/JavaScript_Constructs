const readline = require('readline-sync');

// Get user input
const num = parseInt(readline.question('Enter a number to calculate its factorial: '));


// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1; // 0! and 1! are 1
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Calculate and print factorial
console.log(`The factorial of ${num} is: ${factorial(num)}`);
