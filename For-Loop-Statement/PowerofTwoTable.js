// Get the command-line argument (n)
const n = parseInt(process.argv[2]);


console.log("Power of 2 table:");
for (let i = 1; i <= n; i++) {
  console.log(`2^${i} = ${Math.pow(2, i)}`);
}
