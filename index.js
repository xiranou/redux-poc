const Immutable = require('immutable');
const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);
const automator = setupAutomator(store);

// console.log(automator.modules);

automator.modules.counter.increment()
.then(() => automator.modules.counter.increment(3))
.then(() => automator.modules.counter.decrement(2));
