const Immutable = require('immutable');
const connectAndInstantiate = require('../redux/connect');
const Counter = require('./Counter');
const Chat = require('./Chat');

const Modules = Immutable.fromJS({
  Counter,
  Chat
});

module.exports = function setUpModules(store) {
  const state = Immutable.fromJS(store.getState());

  return Modules.reduce((modules, Mod) => {
    const moduleInstance = connectAndInstantiate(Mod, store);
    const moduleName = moduleInstance.constructor.name.toLowerCase();

    return modules.set(moduleName, moduleInstance);
  }, Immutable.Map()).toJS();
}
