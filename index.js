const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);
const automator = setupAutomator(store);
const { counter, chat } = automator.modules;

// Example 1
// counter.increaseThenDecrease(1)
// .then(() => {
//   console.log('======')
//   counter.increase()
//   .then(() => counter.increase(3))
//   .then(() => counter.decrease(2));
// });

// Example 2
const slackPayload = {
  user: '@UUUUU',
  message: 'some message'
};

// chat.sendMessage(slackPayload.message)
// .then(() => counter.increase(1))
// .then(() => counter.decrease(1));

counter.actions.increase(1);