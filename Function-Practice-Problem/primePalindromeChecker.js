// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not prime
    }
    return true; // Prime number
}
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let str = num.toString();          // Convert number to string
    let reversedStr = str.split('').reverse().join(''); // Reverse the string
    return parseInt(reversedStr);      // Convert back to number
}

// Function to check if number and its palindrome are both prime
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        return `${num} is NOT a prime number.`;
    }

    let palindrome = getPalindrome(num);

    if (isPrime(palindrome)) {
        return `${num} is a prime number and its palindrome ${palindrome} is also a prime number.`;
    } else {
        return `${num} is a prime number but its palindrome ${palindrome} is NOT a prime number.`;
    }
}

// Take user input
const realLine = require("readline-sync");
let number = parseInt(realLine.question("Enter a number:"));
console.log(checkPrimeAndPalindrome(number));
