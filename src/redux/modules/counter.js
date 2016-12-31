const Immutable = require('immutable');

const initialState = Immutable.Map({ count: 0 });
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// action creators
function increment(amount = 1) {
  return {
    type: INCREMENT,
    amount
  };
}

function decrement(amount = 1) {
  return {
    type: DECREMENT,
    amount
  };
}

// reducer
function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case INCREMENT:
      return state.update('count', v => v + action.amount);
    case DECREMENT:
      return state.update('count', v => v - action.amount);
    default:
      return state;
  }
}

module.exports = {
  reducer,
  actionCreators: {
    increment,
    decrement
  }
}