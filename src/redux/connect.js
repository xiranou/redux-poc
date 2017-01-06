const Immutable = require('immutable');

module.exports = function connectAndInstantiate(Module, store, modules) {
  const dispatch = store.dispatch;
  const state = Immutable.fromJS(store.getState());
  const moduleName = Module.name.toLowerCase();
  const moduleInitialState = state.get(moduleName, Immutable.Map());
  const modInstance = new Module(dispatch, moduleInitialState, modules);

  store.subscribe(() => {
    const nextState = Immutable.fromJS(store.getState()).get(moduleName);
    modInstance.update(nextState);
  });

  return modInstance;
}
