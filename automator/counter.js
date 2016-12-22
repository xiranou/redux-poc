function willUpdate(state, dispatch) {
  console.log(`COUNTER: ${state.get('count')}`);
}

module.exports = {
  willUpdate
}