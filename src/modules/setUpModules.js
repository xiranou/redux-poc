const Immutable = require('immutable');
const Counter = require('./Counter');
const Chat = require('./Chat');
const Monitor = require('./Monitor');

const Modules = Immutable.fromJS({
  Counter,
  Chat,
  Monitor
});

function setUpModules(dispatch, store) {
  const state = Immutable.fromJS(store.getState());

  return Modules.reduce((modules, Mod) => {
    const moduleName = Mod.name.toLowerCase();
    const modState = state.get(moduleName, Immutable.Map());
    const moduleInstance = new Mod(dispatch, modState);

    return modules.set(moduleName, moduleInstance);
  }, Immutable.Map());
}

module.exports = {
  setUpModules
};