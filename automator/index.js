const counter = require('./counter');

function listen(state, dispatch) {
  const counterState = state.get('counter');

  counter.willUpdate(counterState, dispatch);
}

module.exports = {
  listen
}
