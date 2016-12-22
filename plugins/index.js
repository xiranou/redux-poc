const Immutable = require('immutable');
const mookie = require('./mookie');

const modules = Immutable.List([mookie]);

function getReducers() {
  return Immutable.Map(modules.map(v => [v.name, v.reducer]));
}

function getPluginModules() {
  return Immutable.Map(modules.map(v => [v.name, v.hook]));
}

module.exports = {
  reducers: getReducers(),
  modules: getPluginModules()
}