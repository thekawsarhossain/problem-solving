// Reverse a string.  -------------- 1
function reverseStrFunction(str) {
  let reversedStr = "";

  length = str.length;
  for (let i = 0; i < length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}

console.log(reverseStrFunction("hello")); // olleh

// another way to reverse a string ---------------- 1.1
function reverseStrFunction1(str) {
  strArray = Array.from(str);
  return strArray.reverse().join("");
}
console.log(reverseStrFunction1("hello")); // olleh

// Reverse an array. -------------------- 2
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(["hello", "world"])); // [ 'world', 'hello' ]

// another way ------------------------ 2.1
function reverseArray1(array) {
  let newArray = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
console.log(reverseArray1(["hello", "world"])); // [ 'world', 'hello' ]

// another way ---------------------- 2.2
function reverseArray2(array) {
  let newArray = [];
  const length = array.length;

  for (let i = length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray2(["hello", "world"])); // [ 'world', 'hello' ]

// Remove duplicate items from an array. ------------- 3
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

// another way -------------------- 3.1
const names = ["kawsar", "khayer", "kawsar", "shihab", "sadman", "sadman"];
const uniqueOne = [...new Set(names)];
console.log(uniqueOne); // [ 'kawsar', 'khayer', 'shihab', 'sadman' ]

// Flatten a nested array using the recursive method. ------------ 4
function flatten(arr) {
  let newArray = new Array();

  const helper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        helper(element);
      } else {
        newArray.push(element);
      }
    }
  };
  helper(arr);
  return newArray;
}
console.log(flatten([1, 2, [3, 4, [5]]])); // [ 1, 2, 3, 4, 5 ]

// You have an array of your friends. Now make the array alphabetically. -------------- 5
function makingAlphabetically(array) {
  return array.sort();
}
console.log(
  makingAlphabetically([
    "kawsar",
    "sadman",
    "shakil",
    "amir",
    "rony",
    "arif",
    "kahyer",
  ])
); // ['amir',   'arif','kahyer', 'kawsar','rony',   'sadman', 'shakil']

// Check if a year is a leap year. ----------------------- 6
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `This ${year} is a leap year!`;
  } else {
    return `This ${year} is not a leap year!`;
  }
}
console.log(leapYear(2004)); // This 2004 is a leap year!

// Find out the vowels from a sentence. ------------------- 7
function findingVowels(sentence) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  let foundedVowels = new Array();

  const length = sentence.length;
  for (let i = 0; i < length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
      foundedVowels.push(sentence[i]);
    }
  }

  return { count, foundedVowels };
}
let = { count, foundedVowels } = findingVowels("I love my village");
console.log(count, foundedVowels); // 6 [ 'I', 'o', 'e', 'i', 'a', 'e' ]

// Find any word from a paragraph (string). And show the index where that word was used first. -------- 8
function getTheStrWhereUsedFirst(paragraph, word) {
  const paragraphLocalCase = paragraph.toLowerCase();
  const wordLocalCase = word.toLowerCase();

  const matched = paragraphLocalCase.match(wordLocalCase);
  const occurances = matched ? matched.length : 0;

  let position = paragraphLocalCase.search(wordLocalCase);
  position = position >= 0 ? position : "not found";

  return { occurances, position };
}
let = { occurances, position } = getTheStrWhereUsedFirst(
  "This is an random text only, only random",
  "only"
);
console.log(occurances, position); // 1, 23

// Find the longest string from an array. ---------------------- 9
function findTheLongestStr(array) {
  let longgestStr = array[0];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i].length > longgestStr.length) {
      longgestStr = array[i];
    }
  }
  return longgestStr;
}
console.log(
  findTheLongestStr(["This", "is", "an", "random", "text", "hello world"])
); // hello world

// Find the numbers  (1-100) which can be divided by 3,5 & 15 ------------ 10
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is buzz`);
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz(50));
