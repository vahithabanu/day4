
//h) Rotate an array by k times

//Using Anonymous

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = function(arr, k) {
    const len = arr.length;
    const rotations = k % len; // handle cases where k > len

    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
};

console.log(rotateArray(array, k));


//Using IIFE
/*

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArray = (function(arr, k) {
    const len = arr.length;
    const rotations = k % len; // handle cases where k > len

    return arr.slice(rotations).concat(arr.slice(0, rotations));
})(array, k);

console.log(rotatedArray);*/


