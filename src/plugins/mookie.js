const Immutable = require('immutable');
const initialState = Immutable.Map({
  mookie: null
})
const MOOKIE = 'AUTOMATOR/PLUGINS/MOOKIE';

function mookie() {
  return {
    type: MOOKIE
  }
}

function incrementCounter() {
  return {
    type: 'INCREMENT'
  }
}

function decrementCounter() {
  return {
    type: 'DECREMENT'
  }
}

function run(dispatch, state) {
  dispatch(mookie());
}

function increment(dispatch, state) {
  dispatch(incrementCounter());
}

function decrement(dispatch, state) {
  // SHOULD DO NOTHING ON THIS TO DISPATCH
  dispatch(decrementCounter());
}

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'MOOKIE':
    return state.update('mookie', () => 'mookie');
  default:
    return state;
  }
}

module.exports = {
  hooks: {
    run,
    increment,
    decrement
  },
  reducer,
  name: 'mookie'
}