const numbers = [1, 2, 3, 4, 5, 2, 4];

const duplicates = numbers.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});
console.log(duplicates);
