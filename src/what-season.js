const CustomError = require("../extensions/custom-error");


const validate = (date) => {
    if (!(Object.prototype.toString.call(date) === "[object Date]")) {
        throw new Error('THROWN')
    }
    if (isNaN(date.getTime())) {
        throw new Error('Error');
    } else {
        return date;
    }
};

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';

    } else if (validate(date)) {
        switch (date.getMonth()) {
            case 0:
                return 'winter';

            case 1:
                return 'winter';

            case 2:
                return 'spring';

            case 3:
                return 'spring';

            case 4:
                return 'spring';

            case 5:
                return 'summer';

            case 6:
                return 'summer';

            case 7:
                return 'summer';

            case 8:
                return 'autumn';

            case 9:
                return 'autumn';

            case 10:
                return 'autumn';

            case 11:
                return 'winter';

        }
    }
};
