const Immutable = require('immutable');
const counter = require('./counter');
const chat = require('./chat');

const modules = Immutable.fromJS({
  counter,
  chat
});

let modulesWithDispatch;

function setUpModules(dispatch, store) {
  const state = Immutable.fromJS(store.getState());

  return modules.map(Mod => {
    const moduleName = Mod.name.toLowerCase();
    const modState = state.get(moduleName, Immutable.Map());
    const module = new Mod(dispatch, modState);

    return module;
  });
}

module.exports = {
  setUpModules
};