const { combineReducers } = require('redux');
const { reducer: counter } = require('./modules/counter');
const { reducer: chat } = require('./modules/chat');

module.exports = combineReducers({
  counter,
  chat
});