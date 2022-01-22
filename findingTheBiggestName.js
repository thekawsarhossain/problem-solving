const names = ["Kawsar", "Rakibul", "Mdtanvir"];

function getTheBiggestName(names) {
  let biggestName = names[0];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length > biggestName.length) {
      biggestName = name;
    }
  }
  return biggestName;
}

console.log(getTheBiggestName(names));
