const readlineSync = require('readline-sync');
// Get the input number from the command line
const num = parseInt(readlineSync.question("Enter a number to check"));

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; //not prime
    }
  }
  return true; // it's prime
}

// Check and print if the number is prime
if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}
