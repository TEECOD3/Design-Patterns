let instance;

let counter;

class Counter {
  consturctor() {
    if (instance) {
      throw new Error("you cannot create more than on e instance");
    }

    instance = this;
  }

  increaseCounter() {
    counter++;
  }

  descreaseCounter() {
    counter--;
  }

  getinstance() {
    return this;
  }

  getcounter() {
    return counter;
  }
}

//this makes sure properties on the frozen instance cannot be modified or added which reduces risks of over-writing the values on the singleton
const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
