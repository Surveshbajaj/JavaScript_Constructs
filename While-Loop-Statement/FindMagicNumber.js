const readlineSync = require('readline-sync');

let low = 1;
let high = 100;
let found = false;

console.log("Think of a number between 1 and 100.");

while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let answer = readlineSync.question(`Is your number ${mid}? (yes/no): `);
    
    if (answer.toLowerCase() === 'yes') {
        console.log(`Magic Number is ${mid}`);
        found = true;
    } else {
        let greater = readlineSync.question(`Is your number greater than ${mid}? (yes/no): `);
        if (greater.toLowerCase() === 'yes') {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}