const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    // if (!Array.isArray(arr)) {
    //     throw new Error('Error');
    // }
    // const newArr = arr.slice();
    // newArr.forEach((value, index, array) => {
    //     // switch (value) {
    //     //     case '--discard-next':
    //     //         if (typeof (array[index + 1]) == 'undefined') {
    //     //             newArr.splice(index, 1);
    //     //         } else {
    //     //             newArr.splice(index, 2);
    //     //         }
    //     //         break;
    //     //     case '--double-next':
    //     //         if (typeof (array[index + 1]) == 'undefined') {
    //     //             newArr.splice(index, 1);
    //     //         } else {
    //     //             newArr.splice(index, 1, array[index + 1])
    //     //         }
    //     //         break;
    //     //
    //     //     case '--discard-prev':
    //     //         if (typeof (array[index - 1]) == 'undefined') {
    //     //             newArr.splice(index, 1);
    //     //         } else {
    //     //             newArr.splice(index - 1, 2)
    //     //         }
    //     //         break;
    //     //
    //     //     case '--double-prev':
    //     //         if (typeof (array[index - 1]) == 'undefined') {
    //     //             newArr.splice(index, 1);
    //     //         } else {
    //     //             newArr.splice(index, 1, array[index - 1])
    //     //
    //     //         }
    //     // }
    //     if (value === '--discard-next') {
    //         if (
    //             array[index + 2] === '--discard-prev' ||
    //             array[index + 2] === '--double-prev'
    //         ) {
    //             return newArr.splice(index, 3);
    //         }
    //     }
    //     if (value === '--discard-next') {
    //         if (typeof (array[index + 1]) == 'undefined') {
    //             newArr.splice(index, 1);
    //         } else {
    //             newArr.splice(index, 2)
    //
    //         }
    //     }
    //     if (value === '--discard-prev') {
    //         if (typeof (array[index - 1]) == 'undefined') {
    //            newArr.splice(index, 1);
    //         } else {
    //              newArr.splice(index - 1, 2)
    //         }
    //     }
    //     if (value === '--double-next') {
    //         if (typeof (array[index + 1]) == 'undefined') {
    //              newArr.splice(index, 1);
    //         } else {
    //              newArr.splice(index, 1, array[index + 1])
    //         }
    //     }
    //     if (value === '--double-prev') {
    //         if (typeof (array[index - 1]) == 'undefined') {
    //              newArr.splice(index, 1);
    //         } else {
    //              array[index] = array[index - 1]
    //         }
    //     }
    // });
    // return newArr;

throw new CustomError('Not implemented');

}
;
