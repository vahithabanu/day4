//g) Remove duplicates from an array

//Using Anonymous

const array = [1, 2, 3, 4, 2, 3, 5];

const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

console.log(removeDuplicates(array)); 


//Using IIFE

/*
const array = [1, 2, 3, 4, 2, 3, 5];

const uniqueArray = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})(array);

console.log(uniqueArray);
*/

