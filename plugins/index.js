const Immutable = require('immutable');
const mookie = require('./mookie');
const exposedActions = require('../actions').exposedActions;

const modules = Immutable.List([mookie]);

function getReducers() {
  return Immutable.Map(modules.map(v => [v.name, v.reducer]));
}

function getPluginModules() {
  return Immutable.Map(modules.map(v => [v.name, v.hooks]));
}

function pluginDispatch(dispatch, action) {
  const isValid = exposedActions.includes(action.type);
  if (isValid) dispatch(action);
}

module.exports = {
  reducers: getReducers(),
  modules: getPluginModules(),
  dispatch: pluginDispatch
}