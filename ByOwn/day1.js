// Reverse a string.
function reverseStrFunction(str) {
  let reversedStr = "";

  length = str.length;
  for (let i = 0; i < length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}

console.log(reverseStrFunction("hello")); // olleh

// another way to reverse a string
function reverseStrFunction1(str) {
  strArray = Array.from(str);
  return strArray.reverse().join("");
}
console.log(reverseStrFunction1("hello")); // olleh

// Reverse an array.
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(["hello", "world"])); // [ 'world', 'hello' ]

// another way
function reverseArray1(array) {
  let newArray = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
console.log(reverseArray1(["hello", "world"])); // [ 'world', 'hello' ]

// another way
function reverseArray2(array) {
  let newArray = [];
  const length = array.length;

  for (let i = length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray2(["hello", "world"])); // [ 'world', 'hello' ]

// Remove duplicate items from an array.
function removeDuplicate(array) {
  let freshOne = new Array();
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if (freshOne.indexOf(array[i]) < 0) {
      freshOne.push(array[i]);
    }
  }
  return freshOne;
}
console.log(
  removeDuplicate(["kawsar", "khayer", "kawsar", "shihab", "sadman", "sadman"]) // [ 'kawsar', 'khayer', 'shihab', 'sadman' ]
);

// another way
const names = ["kawsar", "khayer", "kawsar", "shihab", "sadman", "sadman"];
const uniqueOne = [...new Set(names)];
console.log(uniqueOne); // [ 'kawsar', 'khayer', 'shihab', 'sadman' ]

// Flatten a nested array using the recursive method.
// You have an array of your friends. Now make the array alphabetically.
// Check if a year is a leap year.
// Find out the vowels from a sentence.
// Find any word from a paragraph (string). And show the index where that word was used first.
// Find the longest string from an array.
// Find the numbers  (1-100) which can be divided by 3,5 & 15
