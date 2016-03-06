'use strict';
var dogFactory = require('../../app_test.js');
var name = 'oggy',
    doggy;
beforeEach(function() {
  doggy = dogFactory(name);
});
describe("A factory", function() {
  it("constructor", function() {
    expect(doggy.name).toBe(name);
    expect(doggy.type).toBe('dog');
  });
});
describe("bark", function() {
  it("bark", function() {
    expect(doggy.bark()).toBe('dog with name oggy bark bark bark')
  });
});