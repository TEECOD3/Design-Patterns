const person = {
  name: "temitope",
  age: 42,
  nationality: "Nigerian",
};

//creating a proxy object which we can use to interact with the person Object
const proxyObject = new Proxy(person, {
  get: (obj, prop, receiver) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

proxyObject.name;
proxyObject.age = 43;

//instead of accessing properties from object using obj[prop] we can make use of Reflect.get(obj,prop) or Reflect.set(obj, prop, value)
//Tradeoffs
// Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.

// Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It’s best to not use proxies for performance-critical code.
