const readlineSync = require("readline-sync"); // Import readline-sync
const choice = parseInt(readlineSync.question(
    "Choose a conversion:\n1. Feet to Inch\n2. Inch to Feet\n3. Feet to Meter\n4. Meter to Feet"

  ));

  
  const value = parseFloat(readlineSync.question("Enter the value to convert:"));
  let result;

  
  switch (choice) {
    case 1: // Feet to Inch
      result = value * 12;
      console.log(`${value} Feet = ${result} Inches`);
      break;
    
    case 2: // Inch to Feet
      result = value / 12;
      console.log(`${value} Inches = ${result.toFixed(2)} Feet`);
      break;
    
    case 3: // Feet to Meter
      result = value * 0.3048;
      console.log(`${value} Feet = ${result.toFixed(2)} Meters`);
      break;
    
    case 4: // Meter to Feet
      result = value / 0.3048;
      console.log(`${value} Meters = ${result.toFixed(2)} Feet`);
      break;
    
    default:
      console.log("Invalid choice! Please select a number between 1 and 4.");
  }
  