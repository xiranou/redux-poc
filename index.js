const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const connectAndInstantiate = require('./src/redux/connect');
const setUpModules = require('./src/modules/setUpModules');
const Automator = require('./src/modules/Automator');

const store = createStore(reducer);
const modules = setUpModules(store);

const automator = connectAndInstantiate(Automator, store, modules);

const {
  counter,
  chat
} = automator.modules;

// Example 1
// counter.actions.increase()
// .then(() => counter.actions.increase(3))
// .then(() => counter.actions.decrease(2));

// Example 2
const slackPayload = {
  user: '@UUUU',
  room: '@RRRR',
  message: '@cns deploy ci'
};

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

automator.subscribeTo(monitor);


// basic flow

// auth.getUserPermissionByID(slackPayload.user)
// .then(commander.run)
// .then(chat.sendMessage)
