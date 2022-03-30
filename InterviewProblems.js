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
