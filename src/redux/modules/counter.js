const Immutable = require('immutable');

const initialState = Immutable.Map({ count: 0 });
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// action creators
function increment(amount) {
  return {
    type: INCREMENT,
    amount
  };
}

function decrement(amount) {
  return {
    type: DECREMENT,
    amount
  };
}

// action creator thunks
function increase(amount = 1) {
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(increment(amount));
        return resolve();
      }, 300);
    });
  }
}

function decrease(amount = 1) {
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(decrement(amount));
        return resolve();
      }, 200);
    });
  }
}

function increaseThenDecrease(amount = 1) {
  return dispatch => {
    return dispatch(increase(amount))
    .then(() => dispatch(decrease(amount)));
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
    increase,
    decrease,
    increaseThenDecrease
  }
}