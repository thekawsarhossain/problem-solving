const vowles = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const arraySentence = Array.from(sentence);

  for (const letter of arraySentence) {
    if (vowles.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("I love my village "));
