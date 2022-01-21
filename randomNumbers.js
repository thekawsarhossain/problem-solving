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
