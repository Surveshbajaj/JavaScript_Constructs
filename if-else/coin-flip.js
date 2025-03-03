// Simulate a coin flip
function coinFlip(){
    //Generate randome 0 or 1
    let currentStatus = Math.floor(Math.random() * 2);
    if(currentStatus == 0){
        return "Tails";
    }else{
        return "Heads";
    }
}
// Print the result
console.log("Flip coin result: ", coinFlip());