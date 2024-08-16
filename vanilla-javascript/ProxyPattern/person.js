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
