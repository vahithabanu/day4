//b) Convert all the strings to title caps in a string array

//Using Anonymous


/*let strings = ["hello", "world", "javascript", "programming"];

let convertToTitleCase = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr;
};

let titleCasedStrings = convertToTitleCase(strings);
console.log(titleCasedStrings);*/

//Using IIFE



let strings = ["hello", "world", "javascript", "programming"];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
})(strings);

console.log(strings);
