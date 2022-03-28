const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return "not found";
};

const result = linearSearch(["a", "b", "c", "d", "c"], "c");

console.log(result);
