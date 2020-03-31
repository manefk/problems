function addTwoDigits(n) {
  let numbersArray = n.toString().split("");

  return numbersArray.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  }, 0);
}

function reverseInt(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return Math.sign(n) * parseInt(reversed);
}
