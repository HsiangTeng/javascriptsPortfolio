/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  //return console.log(result);
  return result;
};

/*
arr = [1, 2, 3];
fn = function plusone(n) {
  return n + 1;
};

map(arr, fn);
*/
