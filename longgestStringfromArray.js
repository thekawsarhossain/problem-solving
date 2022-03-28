const longestString = (names) => {
  let longestWord = "";

  for (const name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
};

console.log(
  longestString(["kawsar hossain", "the kayer hossain", "amir", "shihab"])
);
