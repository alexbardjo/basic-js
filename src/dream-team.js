const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    } else {
        const team = [];
        members.forEach((el) => {
            if (typeof el === 'string') {
                team.push(el.split('').find((e)=>  e !== ' '))
            }
        });
        const res = team.map((e) => e.toUpperCase());
        return res.sort().join('');
    }
};