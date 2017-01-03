const { combineReducers } = require('redux');
const { reducer: counter } = require('./modules/counter');

module.exports = combineReducers({
  counter
});