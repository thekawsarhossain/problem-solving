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
