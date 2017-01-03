const { createStore: _createStore } = require('redux');

module.exports = function createStore(reducer) {
  return _createStore(reducer);
}