// get random number between 0 to 6
function getRandomNumber() {
  const random = Math.round(Math.random() * 5) + 1;
  return random;
}
console.log(getRandomNumber());

// get another random number
function getRandomNumber2() {
  const random = Math.round(Math.random() * 100);
  return random;
}
console.log(getRandomNumber2());

// getting random number from min to max and reusable

const getRandomNumber3 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber3(1, 6));
