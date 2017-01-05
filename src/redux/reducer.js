const { combineReducers } = require('redux');
const { reducer: counter } = require('./modules/counter');
const { reducer: chat } = require('./modules/chat');
const { reducer: monitor } = require('./modules/monitor');

module.exports = combineReducers({
  counter,
  chat,
  monitor
});