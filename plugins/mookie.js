const Immutable = require('immutable');

function mookie() {
  return {
    type: 'MOOKIE'
  }
}

function incrementCounter() {
  return {
    type: 'INCREMENT'
  }
}

function reducer(state = Immutable.Map(), action) {
  switch (action.type) {
  case 'MOOKIE':
    return state.set('mookie', 'mookie');
  case 'NO-MOOKIE':
    return state.set('mookie', 'no-mookie');
  default:
    return state;
  }
}

function run(state, dispatch) {
  dispatch(mookie());
}

function increment(state, dispatch) {
  dispatch(incrementCounter());
}

module.exports = {
  hook: {
    run,
    increment
  },
  reducer,
  name: 'mookie'
}