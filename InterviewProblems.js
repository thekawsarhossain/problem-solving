// ---------------------- 01
// reverse the string
const str = "apple!";
// console.log(Array.from(str).reverse());

const reverseStr = (str) => {
  const strArray = Array.from(str);
  strArray.reverse();
  str = strArray.join("");
  return str;
};
console.log(reverseStr(str));

// another way of reverse string
(function (str) {
  let reverseStr = "";

  for (let letter of str) {
    reverseStr = letter + reverseStr;
  }
  console.log(reverseStr);
})("apple");

//  ---------------------- 02
// palindrome // like there will be an string if we reverse the string and if we get the same word after reverse the string it will be true or palindrome ex: abtba === abtba

const palindrome = (str) => {
  const strArray = Array.from(str);
  strArray.reverse();
  const reversedStr = strArray.join("");
  if (str === reversedStr) {
    console.log("palindrome True");
  } else {
    console.log("palindrome false");
  }
};

palindrome("abtba");

// ---------------------- 03
// find the charcter which is most in a string and the same charcter count
const maxChar = (str) => {
  const checkStr = str.replace(" ", "").toLowerCase().split("");

  const charObjCount = {};

  for (let char of checkStr) {
    charObjCount[char] ? charObjCount[char]++ : (charObjCount[char] = 1);
  }

  let maxNum = 0;
  let maximunChar = "";
  for (let char in charObjCount) {
    if (charObjCount[char] >= maxNum) {
      maxNum = charObjCount[char];
      maximunChar = char;
    }
  }

  console.log(charObjCount);
  console.log(maxNum, "maximun char :", maximunChar);
};
maxChar("hello world");

// ---------------------- 04
// swap the integer number
const reverseInt = (n) => {
  return parseInt(n.toString().split("").reverse().join(""));
};
console.log(reverseInt(-991));

// ---------------------- 05
// there we will be pass an array and a number based on this we have to make a function that will make the array into nestead array and the child array will be the length of that number which will be given in the perameter

const chunks = ((arr, n) => {
  const chunkedArray = [];

  for (let element of arr) {
    let lastElement = chunkedArray[chunkedArray.length - 1];

    if (!lastElement || lastElement.length === n) {
      chunkedArray.push([element]);
    } else {
      lastElement.push(element);
    }
  }
  return chunkedArray;
})([1, 5, 15, 8, -2, 8, 0, 3], 2);
console.log({
  chunks,
});
