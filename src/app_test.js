"use strict";
let dog = {
  type: 'dog',
  name: 'bobby',
  bark () {
    return `${this.type} with name ${this.name} bark bark bark`;
  }
}
let doggy = function factory(name) {
  return Object.create(Object.assign(dog, {
    name: name
  }));
}
let oggy = doggy('oggy');
console.log(oggy.bark());