// Get day and month from command line arguments
const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

// Function to check if date is between March 20 and June 20
function isBetweenMarch20AndJune20(day, month) {
    if (month < 3 || month > 6) {
        return false; // Outside March to June range
    }
    if (month === 3 && day < 20) {
        return false; // Before March 20
    }
    if (month === 6 && day > 20) {
        return false; // After June 20
    }
    return true; // Within the range
}

// Validate inputs and print result
if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    console.log("Invalid input. Please provide day (1-31) and month (1-12).");
} else {
    console.log(isBetweenMarch20AndJune20(day, month));
}
