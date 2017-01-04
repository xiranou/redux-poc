const Immutable = require('immutable');

const { getModules } = require('./modules');

// redux store binding
function setup(store) {
  const dispatch = store.dispatch;
  const modules = getModules(dispatch, store);

  store.subscribe(() => {
    const appState = Immutable.fromJS(store.getState());
    modules.map((mod, moduleName) => {
      const newModState = appState.get(moduleName);
      mod.update(newModState);
    });
  });

  return {
    modules: modules.toJS()
  };
}

function getStoreState(store, key) {
  const state = store.getState();
  return key ? state[key] : state;
}

module.exports = setup;
