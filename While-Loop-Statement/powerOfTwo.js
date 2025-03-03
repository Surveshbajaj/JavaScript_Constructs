// Get the command-line argument (n)
const n = parseInt(process.argv[2]);

console.log("Powers of 2 table (up to 256):");

let i = 0;
let power = 1; // 2^0 = 1

while (i <= n && power <= 256) {
  console.log(`2^${i} = ${power}`);
  i++;
  power = Math.pow(2, i); // Calculate next power of 2
}
