let text = "Kawsar Hossain";

const sameLetterCount = (text) => {
  const sameLetterTotal = {};
  updatedName = text.replace(" ", "").toLowerCase().split("");

  updatedName.forEach((letter) => {
    if (sameLetterTotal[letter]) {
      sameLetterTotal[letter]++;
    } else {
      sameLetterTotal[letter] = 1;
    }
  });
  return sameLetterTotal;
};

console.log(sameLetterCount(text));

// another way
const sameLetter = (str) => {
  let sameLetterCountObj = {};

  arrayStr = Array.from(str);
  for (let letter of arrayStr) {
    if (sameLetterCountObj[letter]) {
      sameLetterCountObj[letter]++;
    } else {
      sameLetterCountObj[letter] = 1;
    }
  }
  return sameLetterCountObj;
};
console.log(sameLetter(text));
