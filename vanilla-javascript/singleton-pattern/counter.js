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

// Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.
