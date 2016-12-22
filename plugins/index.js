const Immutable = require('immutable');
const mookie = require('./mookie');

const plugins = Immutable.List([mookie]);

function getReducers() {
  // const pluginReducers = {};
  // plugins.map(p => pluginReducers[p.name] = p.reducer);
  // return pluginReducers;

  return Immutable.Map(plugins.map(v => [v.name, v.reducer]));
}

console.log(getReducers().toJS());