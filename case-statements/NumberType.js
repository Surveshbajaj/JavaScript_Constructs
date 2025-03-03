const readlineSync = require("readline-sync"); // Import readline-sync

const number = parseInt(readlineSync.question("Enter a number (1, 10, 100, 1000, etc.):"));
let placeValue;

switch (number) {
  case 1: 
    placeValue = "Unit";
    break;
  case 10: 
    placeValue = "Ten";
    break;
  case 100: 
    placeValue = "Hundred";
    break;
  case 1000: 
    placeValue = "Thousand";
    break;
  case 10000: 
    placeValue = "Ten Thousand";
    break;
  case 100000: 
    placeValue = "Lakh";
    break;
  case 1000000: 
    placeValue = "Ten Lakh";
    break;
  default: 
    placeValue = "Invalid input! Please enter 1, 10, 100, 1000, etc.";
}

console.log(placeValue);
