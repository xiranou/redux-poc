const Immutable = require('immutable');

module.exports = function counter(state = Immutable.Map({ count: 0 }), action) {
  switch (action.type) {
  case 'INCREMENT':
    return state.update('count', v => v + 1);
  case 'DECREMENT':
    return state.update('count', v => v - 1);
  default:
    return state
  }
}