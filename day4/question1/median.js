//f) Return median of two sorted arrays of the same size.

//Using Anonymous

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const findMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[Math.floor(mid)];
    }
};

console.log(findMedian(arr1, arr2));

//Using IIFE

/*const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[Math.floor(mid)];
    }
})(arr1, arr2);

console.log(median);*/