const names = ["Kawsar", "Hossain", "Khayer", "Hossain", "Kawsar"];

function getUniqueNames(names) {
  const uniqueNames = [];

  for (let i = 0; i < names.length; i++) {
    let index = uniqueNames.indexOf(names[i]);
    if (index === -1) {
      uniqueNames.push(names[i]);
    }
  }
  return uniqueNames;
}

console.log(getUniqueNames(names));
