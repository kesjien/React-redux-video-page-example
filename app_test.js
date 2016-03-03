"use strict";
var dog = {
  type: 'dog',
  name: 'bobby',
  bark () {
    return `${this.type} with name ${this.name} bark bark bark`;
  }
}
var doggy = function factory(name) {
  return Object.create(Object.assign(dog, {
    name: name
  }));
}

module.exports = doggy;