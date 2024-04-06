/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  //在 millis 後新增一個 promise
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
