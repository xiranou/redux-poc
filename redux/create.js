const _createStore = require('redux').createStore;

module.exports = function createStore(reducer) {
  return _createStore(reducer);
}