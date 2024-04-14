/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    let a = new Array(functions.length);
    let count = 0;
    for (let i = 0; i <= functions.length - 1; i++) {
      let fn = functions[i];
      fn()
        .then((val) => {
          count++;
          //console.log(i);
          a[i] = val;
          if (count === functions.length) {
            resolve(a);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log); // [42]

/*
    let count = 0;
    //let res = new Array(functions.length);
    let res = [];

    for (let i = 0; i < functions.length; i++) {
      let fn = functions[i];
      fn()
        .then(function (val) {
          count += 1;
          res[i] = val;
          if (count === functions.length) resolve(res);
        })
        .catch(function (err) {
          reject(err);
        });
    }
    */
