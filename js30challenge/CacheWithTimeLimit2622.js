var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isexist = false;
  if (this.cache[key] !== undefined) {
    clearTimeout(this.cache[key].time);
    isexist = true;
    this.cache[key].value = value;
    this.cache[key].time = setTimeout(() => delete this.cache[key], duration);
  }
  this.cache[key] = {
    value: value,
    time: setTimeout(() => delete this.cache[key], duration),
  };

  return isexist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
