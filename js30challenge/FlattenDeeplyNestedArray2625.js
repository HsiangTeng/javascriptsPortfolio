/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let result = [];
  let n1 = n;
  help(arr, n1);

  function help(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) & (n > 0)) {
        help(arr[i], n - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }

  return result;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;

console.log(flat(arr, n));
