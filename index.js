const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);
const automator = setupAutomator(store);
const {
  counter,
  chat,
  auth,
  commander
} = automator.modules;

// Example 1
counter.actions.increase()
.then(() => counter.actions.increase(3))
.then(() => counter.actions.decrease(2));

// Example 2
const slackPayload = {
  user: '@UUUUU',
  message: 'some message'
};

// basic flow

// auth.getPermission(slackPayload)
// .then(commander.run)
// .then(chat.sendMessage)
