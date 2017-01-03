const { createStore: _createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');

const middlewares = [thunk];

module.exports = function createStore(reducer) {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(_createStore)
  return createStoreWithMiddlewares(reducer);
}