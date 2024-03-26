//a) Print the odd numbers in an array

//Using Anonymous

/*const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);
*/
//Using IIFE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(array);
