/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((delayresolve, reject1) => {
      const timeoutId = setTimeout(() => {
        reject1("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          delayresolve(result);
        })
        .catch((error) => {
          reject1(error);
        });
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
inputs = [5];
t = 150;
const a = timeLimit(fn, t);
//a(inputs).catch(console.log);
a(inputs).then(console.log);
