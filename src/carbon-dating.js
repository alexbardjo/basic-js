const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
    if (sampleActivity.trim() === '') {
      return false;
  }
    const res =  /([a-zA-Z -])/.test(sampleActivity);
  if(res) {
    return false;
  }
  if (!isFinite(Number(sampleActivity))) {
    return false;
  }
  if (Number(sampleActivity) >=15 || Number(sampleActivity) <= 0) {
    console.log(false);
    return false;
  }

  const N0 = MODERN_ACTIVITY;
  const N = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil((Math.log(N0 / N)) / k);
};
