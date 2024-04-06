/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  [value1, value2] = await Promise.all([promise1, promise2]);

  return value1 + value2;
  //   a = await promise1;
  //   b = await promise2;
  //   return a + b;
};

promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((a) => console.log(a));
