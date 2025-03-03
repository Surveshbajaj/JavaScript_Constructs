// Function to generate a random 3-digit number (100 to 999)
function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 5 random 3-digit numbers
let numbers = [];
for(let i=0; i<5; i++){
    numbers[i] = getRandomThreeDigit();
}
console.log("Generated numbers:", numbers);

// Find min and max values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Minimum value:", min);
console.log("Maximum value:", max);
