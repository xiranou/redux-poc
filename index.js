const Immutable = require('immutable');
const reducer = require('./redux/reducer');
const createStore = require('./redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);

const automator = setupAutomator(store);

automator.modules.counter.increment();
automator.modules.counter.increment(3);
automator.modules.counter.decrement(2);
