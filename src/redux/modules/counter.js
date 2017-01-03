const Immutable = require('immutable');

const initialState = Immutable.Map({ count: 0 });
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// action creators
function _increment(amount) {
  return {
    type: INCREMENT,
    amount
  };
}

function _decrement(amount) {
  return {
    type: DECREMENT,
    amount
  };
}

function increment(amount = 1) {
  return dispatch => {
    setTimeout(() => {
      dispatch(_increment(amount));
    }, 300);
  }
}

function decrement(amount) {
  return dispatch => {
    setTimeout(() => {
      dispatch(_decrement(amount));
    }, 200);
  }
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