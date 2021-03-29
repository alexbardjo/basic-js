const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?  options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const addition = options.hasOwnProperty('addition') ?  String(options.addition) : undefined;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  const arr = new Array(repeatTimes).fill(String(str));

  const resArr = arr.map((el) => {
    if(addition) {
      const underArr = new Array(additionRepeatTimes).fill(`${addition}`);
      const wtf = `${el}${underArr.join(`${additionSeparator}`)}`;
      return wtf
    }
    return el;
  });
  const result = resArr.join(`${separator}`);
  return result;
};
  