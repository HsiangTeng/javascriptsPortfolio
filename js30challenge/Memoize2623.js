/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  result = {};
  return function (...args) {
    const keys = String(args);
    if (result.hasOwnProperty(keys)) {
      return result[keys];
    }
    let answer = fn(...args);
    result[keys] = answer;
    return answer;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
