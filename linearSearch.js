const linearSearch = (arr, value) => {
  const length = arr.length; // this is the best prctice and for this it will not check every time the length of the array

  for (let i = 0; i < length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return "not found";
};

const result = linearSearch(["a", "b", "c", "d", "c"], "c");

console.log(result);
