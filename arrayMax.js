const numbers = [10, 12, 13, 15, 25, 32, 45, 48, 75];

function getMaxNumber(numbers) {
  let maxNumber = numbers[0];

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(getMaxNumber(numbers));
