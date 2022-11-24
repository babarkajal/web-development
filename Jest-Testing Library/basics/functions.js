/**
 * Define all functions to test
 */

const functions = {
  add: (a, b) => {
    return a + b;
  },
  //NULL
  isNull: () => null,

  //toEqual
  getObject: () => ({ name: "kajal", age: 23 }),

  getTruthy: () => [],
  getFalsy: () => 0,

  numbersArr: () => [1, 10, 45, 34],
};

module.exports = functions;
