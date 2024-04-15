/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  // Reduce the array into a single object
  return this.reduce((acc, curr) => {
    let a = fn(curr);
    if (!acc[a]) {
      acc[a] = [];
    }
    acc[a].push(curr);

    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
array = [
  [1, 2, 3],
  [1, 3, 5],
  [3, 5, 9],
];
fn = function (list) {
  return String(list[0]);
};

console.log(array.groupBy(fn));
