
//e) Do the below programs in arrow functions. Return all the palindromes in an array

const array = ["level", "hello", "radar", "world", "madam"];

const findPalindromes = array => {
    const isPalindrome = str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    return array.filter(str => isPalindrome(str));
};

console.log(findPalindromes(array));
