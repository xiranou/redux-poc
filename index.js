const Immutable = require('immutable');
const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);
const automator = setupAutomator(store);
const counter = automator.modules.counter;

counter.increaseThenDecrease(1)
.then(() => {
  console.log('======')
  counter.increase()
  .then(() => counter.increase(3))
  .then(() => counter.decrease(2));
});
