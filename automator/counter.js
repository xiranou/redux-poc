function willUpdate(state, dispatch) {
  console.log(state.get('count'));
}

module.exports = {
  willUpdate
}