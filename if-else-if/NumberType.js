// Import the readline module to take user input from the console
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the place value of the input number
function displayPlaceValue(num) {
  if (num === 1) {
    console.log("Unit"); 
  } else if (num === 10) {
    console.log("Ten"); 
  } else if (num === 100) {
    console.log("Hundred"); 
  } else if (num === 1000) {
    console.log("Thousand"); 
  } else if (num === 10000) {
    console.log("Ten Thousand"); 
  } else if (num === 100000) {
    console.log("Lakh");
  } else if (num === 1000000) {
    console.log("Ten Lakh");
  } else {
    console.log("Please enter a valid place value (1, 10, 100, 1000, etc)."); // Invalid input
  }
  rl.close(); 
}


rl.question("Enter a number (1, 10, 100, 1000, etc): ", (input) => {
  const number = parseInt(input); // Convert input to integer
  displayPlaceValue(number);
});
