const readlineSync = require('readline-sync');
// Get range from input 
const start = parseInt(readlineSync.question("Enter start number\n"));
const end = parseInt(readlineSync.question("Enter end number\n"));



// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; //  not prime
    }
  }
  return true; // it's prime
}


console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
