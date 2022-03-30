const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const line = "hello world";

const countVowels = (str) => {
  let count = 0;
  let matchedVowles = [];

  const arrayStr = Array.from(str);

  for (let letter of arrayStr) {
    if (vowels.includes(letter)) {
      matchedVowles.push(letter);
      count++;
    }
  }
  return [count, matchedVowles];
};

console.log(countVowels(line));
