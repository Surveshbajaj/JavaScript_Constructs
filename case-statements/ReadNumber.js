const readlineSync = require("readline-sync"); // Import readline-sync

const number = parseInt(readlineSync.question("Enter a number (1-7) to get the weekday:"));
let day;

switch (number) {
  case 1: 
    day = "Sunday";
    break;
  case 2: 
    day = "Monday";
    break;
  case 3: 
    day = "Tuesday";
    break;
  case 4: 
    day = "Wednesday";
    break;
  case 5: 
    day = "Thursday";
    break;
  case 6: 
    day = "Friday";
    break;
  case 7: 
    day = "Saturday";
    break;
  default: 
    day = "Invalid input! Please enter a number between 1 and 7.";
}

console.log(day);
