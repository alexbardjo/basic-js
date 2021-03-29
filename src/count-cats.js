const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const arr = [];
  matrix.forEach((el) => {
    arr.push(el.filter((el) => el === '^^'));
  });
  return arr.flat().length;
};

