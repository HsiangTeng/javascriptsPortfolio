class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result = this.result + value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result = this.result - value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result = this.result * value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new error("Division by zero is not allowed");
    }
    this.result = this.result / value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = this.result ** value;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.num;
  }
}
