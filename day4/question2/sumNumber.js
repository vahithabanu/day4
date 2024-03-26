//c) Do the below programs in arrow functions. Sum of all numbers in an array



const array = [1, 2, 3, 4, 5];

const sum = array => array.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(sum(array)); 

