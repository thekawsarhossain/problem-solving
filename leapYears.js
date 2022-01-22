function getLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is an Leap Year !";
  } else {
    return "This isn't a Leap Year";
  }
}

console.log(getLeapYear(2003));
