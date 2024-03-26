// c) Sum of all numbers in an array

//Using Anonymous
/*const array = [1, 2, 3, 4, 5];

const sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(array)); 

*/

//Using IIFE

const array = [1, 2, 3, 4, 5];

const sum = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(array);

console.log(sum);
