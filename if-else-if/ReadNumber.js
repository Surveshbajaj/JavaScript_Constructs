// Import the readline module for user input
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the day of the week based on the input number
function getWeekDay(num) {
  if (num === 1) {
    console.log("Sunday"); 
  } else if (num === 2) {
    console.log("Monday"); 
  } else if (num === 3) {
    console.log("Tuesday"); 
  } else if (num === 4) {
    console.log("Wednesday"); 
  } else if (num === 5) {
    console.log("Thursday"); 
  } else if (num === 6) {
    console.log("Friday"); 
  } else if (num === 7) {
    console.log("Saturday"); 
  } else {
    console.log("Please enter a number between 1 and 7."); // Handle invalid input
  }
  rl.close(); 
}


rl.question("Enter a number (1-7): ", (input) => {
  const number = parseInt(input); // Convert the input to an integer
  getWeekDay(number); 
});
