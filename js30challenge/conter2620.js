/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let result = n;
  return function () {
    return result++;
  };
};
