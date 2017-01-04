const Immutable = require('immutable');

const { setUpModules } = require('./modules/setUpModules');

// redux store binding
function setup(store) {
  const dispatch = store.dispatch;
  const modules = setUpModules(dispatch, store);

  store.subscribe(() => {
    const appState = Immutable.fromJS(store.getState());
    modules.map((mod, moduleName) => {
      const nextModState = appState.get(moduleName, null);
      mod.update(nextModState);
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
