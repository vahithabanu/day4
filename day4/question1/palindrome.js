//e) Return all the palindromes in an array

//Using Anonymous

/*const array = ["level", "hello", "radar", "world", "madam"];

const findPalindromes = function(arr) {
    const isPalindrome = function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
};

console.log(findPalindromes(array));

*/

//Using IIFE

const array = ["level", "hello", "radar", "world", "madam"];

const palindromes = (function(arr) {
    const isPalindrome = function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
})(array);

console.log(palindromes);
