const Immutable = require('immutable');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increment() {
  return {
    type: INCREMENT
  };
}

function decrement() {
  return {
    type: DECREMENT
  };
}

function getExposedActions() {
  return Immutable.List([
    INCREMENT
  ]);
}

module.exports = {
  increment,
  decrement,
  exposedActions: getExposedActions()
}