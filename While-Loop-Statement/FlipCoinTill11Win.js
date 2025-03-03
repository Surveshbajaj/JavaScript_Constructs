// Initialize counts for heads and tails
let headsCount = 0;
let tailsCount = 0;
const winningScore = 11;

console.log("Flipping the coin until either Heads or Tails wins 11 times...");

while (headsCount < winningScore && tailsCount < winningScore) {
  // Simulate a coin flip: 0 = Tails, 1 = Heads
  let flip = Math.floor(Math.random() * 2);

  if (flip === 1) {
    headsCount++;
    console.log(`Heads! (Heads: ${headsCount}, Tails: ${tailsCount})`);
  } else {
    tailsCount++;
    console.log(`Tails! (Heads: ${headsCount}, Tails: ${tailsCount})`);
  }
}

console.log(`\nGame Over! ${headsCount === winningScore ? "Heads" : "Tails"} wins 11 times!`);
