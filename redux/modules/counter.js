const Immutable = require('immutable');

const initialState = Immutable.Map({ count: 0 });
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// action creators
function increment() {
  return {
    type: INCREMENT
  };
}

function decrement() {
  return {
    type: DECREMENT
  };
}

// reducer
function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case INCREMENT:
      return state.update('count', v => v + 1);
    case DECREMENT:
      return state.udpate('count', v => v - 1);
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