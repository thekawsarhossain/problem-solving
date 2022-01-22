// first way
function findingMaxNumber(one, two, three) {
  let maxNumber = 0;

  if (one > two && one > three) {
    maxNumber = one;
  } else if (two > one && two > three) {
    maxNumber = two;
  } else {
    maxNumber = three;
  }
  return maxNumber;
}
console.log(findingMaxNumber(20, 10, 40));

// second way
const one = 20;
const two = 50;
const three = 10;
console.log(Math.max(one, two, three));
