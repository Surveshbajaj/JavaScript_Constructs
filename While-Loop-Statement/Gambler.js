// Initialize starting amount, goal, and counters
let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

console.log("Starting with Rs 100. Goal: Rs 200. Betting Re 1 per round...");

// Run the game loop until broke or goal is reached
while (money > 0 && money < goal) {
  bets++; // Count every bet
  let betResult = Math.random() < 0.5; // 50% chance to win or lose

  if (betResult) {
    money++; // Win 1 Re
    wins++;  // Count win
  } else {
    money--; // Lose 1 Re
  }
}

console.log("\nGame Over!");
console.log(`Total bets made: ${bets}`);
console.log(`Number of times won: ${wins}`);
console.log(money === goal ? "Congratulations! You reached your goal of Rs 200." : "Sorry, you went broke.");
