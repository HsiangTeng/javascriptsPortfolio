/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (val1) => {
      if (val1 === val) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (val1) => {
      if (val1 !== val) return true;
      else throw new Error("Equal");
    },
  };
};

c = expect(5).toBe(5);
console.log(c);
