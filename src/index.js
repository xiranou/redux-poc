const { getModules } = require('./modules');

// redux store binding
function setup(store) {
  const dispatch = store.dispatch;
  const modules = getModules(dispatch);

  store.subscribe(() => {
    modules.map((mod, name) => {
      const modUpdate = mod.get('update');
      const modState = getStoreState(store, name);
      modUpdate(dispatch, modState);
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
