const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const setupAutomator = require('./src');

const store = createStore(reducer);
const automator = setupAutomator(store);
const {
  counter,
  chat,
  automator: _automator
} = automator.modules;

// Example 1
// counter.actions.increase()
// .then(() => counter.actions.increase(3))
// .then(() => counter.actions.decrease(2));

// Example 2
// const slackPayload = {
//   user: '@UUUU',
//   room: '@RRRR',
//   message: '@cns deploy ci'
// };

const monitor = {
  handlePayload: (payloadHandler) => {
    const slackPayload = {
      user: '@UUUU',
      room: '@RRRR',
      message: '@cns deploy ci'
    };

    payloadHandler(slackPayload);
  }
}

_automator.subscribeTo(monitor);


// basic flow

// auth.getUserPermissionByID(slackPayload.user)
// .then(commander.run)
// .then(chat.sendMessage)
