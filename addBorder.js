function addBorder(picture) {
  let wallLength = picture[0].length + 2;
  let wall = "";
  for (let i = 0; i < wallLength; i++) {
    wall = wall.concat("*");
  }
  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

function addBorderRefactored(picture) {
  let res = [];
  let wall = "*".repeat(picture[0].length + 2);

  res.push(wall);

  picture.forEach(pic => {
    res.push("*" + pic + "*");
  });

  res.push(wall);

  return res;
}
