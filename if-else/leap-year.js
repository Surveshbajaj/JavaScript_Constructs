// Get year from command line arguments
const year = parseInt(process.argv[2]);

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year < 1000 || year > 9999) {
        return "Please enter a 4-digit year.";
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

// Validate input and print result
if (isNaN(year)) {
    console.log("Invalid input. Please provide a valid year.");
} else {
    console.log(isLeapYear(year));
}
