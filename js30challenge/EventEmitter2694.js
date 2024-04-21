class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  constructor() {
    this.eventfn = new Map();
  }
  subscribe(eventName, callback) {
    if (!this.eventfn.has(eventName)) {
      this.eventfn.set(eventName, []);
    }
    const listeners = this.eventfn.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        let index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let result = [];
    if (!this.eventfn.has(eventName)) {
      return result;
    }

    let eventemit = this.eventfn.get(eventName);
    eventemit.forEach((val) => {
      result.push(val(...args));
    });
    return result;
  }
}

const emitter = new EventEmitter();

onClickCallback = (x) => x + 1;
onClickCallback1 = (x, y) => x + y + 2;
input = [5, 100];

const sub1 = emitter.subscribe("onClick", onClickCallback);
const sub = emitter.subscribe("onClick", onClickCallback1);

sub1.unsubscribe();

console.log(emitter.emit("onClick", input)); // [99]
//sub.unsubscribe(); // undefined
//emitter.emit("onClick"); // []
