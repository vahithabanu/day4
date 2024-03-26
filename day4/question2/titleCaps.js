//b) Do the below programs in arrow functions Convert all the strings to title caps in a string array


const stringArray = ["hello world", "good morning", "have a nice day"];

const titleCaseArray = stringArray.map(str =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

console.log(titleCaseArray); 

