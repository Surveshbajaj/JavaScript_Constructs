function isPalindrome(num) {
    // Convert number to string
    let str = num.toString();
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    // Compare original and reversed string
    return str === reversedStr;
}

function checkPalindromes(num1, num2) {
    let result1 = isPalindrome(num1) ? `${num1} is a Palindrome.` : `${num1} is NOT a Palindrome.`;
    let result2 = isPalindrome(num2) ? `${num2} is a Palindrome.` : `${num2} is NOT a Palindrome.`;
    
    return `${result1}\n${result2}`;
}

console.log(checkPalindromes(121, 454)); // Both are Palindromes
console.log(checkPalindromes(123, 456)); // Neither are Palindromes
console.log(checkPalindromes(1971, 202)); // Mixed case
