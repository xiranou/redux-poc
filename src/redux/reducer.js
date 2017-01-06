const { combineReducers } = require('redux');
const { reducer: counter } = require('./modules/counter');
const { reducer: chat } = require('./modules/chat');
const { reducer: automator } = require('./modules/automator');

module.exports = combineReducers({
  counter,
  chat,
  automator
});