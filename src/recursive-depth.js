const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    // constructor() {
    //   this.counter = 0;
    // }
    //
    //   calculateDepth(arr) {
    //    let maxDepth = 0;
    //       arr.forEach( e => {
    //           if (Array.isArray(e)) {
    //               this.counter++;
    //               this.calculateDepth(e);
    //           } else {
    //             return;
    //           }
    //           if (this.counter > maxDepth) {
    //               maxDepth = this.counter;
    //               this.counter = 0;
    //           }
    //       });
    //       return maxDepth+1;
    //   }
    // constructor() {
    //     this.counter = 1;
    //     this.depth = 1;
    // }
    //
    // calculateDepth(arr) {
    //     for (let item of arr) {
    //         if (Array.isArray(item)) {
    //             this.counter++;
    //             this.calculateDepth(item);
    //         }
    //     }
    //     if (this.counter > this.depth) {
    //         this.depth = this.counter;
    //     }
    //     this.counter = 1;
    //     return this.depth;
    // }
  calculateDepth(/*arr*/) {
    throw new CustomError('Not implemented');

  }

};