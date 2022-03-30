const mixedArray = [
  "kawsar",
  undefined,
  "lws",
  false,
  "",
  "apple",
  40,
  true,
  "K",
  NaN,
];

const trueArray = mixedArray.filter((element) => {
  if (element) {
    return true;
  } else {
    return false;
  }
});

console.log(trueArray);

// another short way to get same result
const trueArray2 = mixedArray.filter(Boolean);
console.log(trueArray2);

// getting truthy value from object and remove falsy values

const mixedObj = {
  a: "kawsar",
  b: undefined,
  c: "lws",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: true,
  i: "K",
  j: NaN,
};

const truthyObj = (obj) => {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(truthyObj(mixedObj))
