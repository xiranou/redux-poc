const actionCreators = require('../redux/modules/counter').actionCreators;
const { increment, decrement } = actionCreators;

function willUpdate(state, dispatch) {
  console.log(state);
  console.log(`WILL UPDATE`);
}

module.exports = {
  willUpdate,
  increment,
  decrement,
  someProp: 1
}