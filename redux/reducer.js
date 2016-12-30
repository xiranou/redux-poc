const combineReducers = require('redux').combineReducers;
const counter = require('./modules/counter').reducer;

module.exports = combineReducers({
  counter
});