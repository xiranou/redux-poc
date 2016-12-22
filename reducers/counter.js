const Immutable = require('immutable');

const initialState = Immutable.Map({
  count: 0
});

module.exports = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    console.log(`STATE: ${state}`);
    return state.update('count', v => v + 1);
  case 'DECREMENT':
    return state.update('count', v => v - 1);
  default:
    return state
  }
}