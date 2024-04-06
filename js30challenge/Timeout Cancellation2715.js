/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 **/
var cancellable = function (fn, args, t) {
  var timeout = setTimeout(() => fn(...args), t);
  var cancelFn = () => clearTimeout(timeout);
  return cancelFn;
};
