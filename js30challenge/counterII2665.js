/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  result = init;
  return {
    increment: () => {
      result++;
      return result;
    },
    reset: () => {
      result = init;
      return result;
    },
    decrement: () => {
      result--;
      return result;
    },
  };
};

init = 5;

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
