const Immutable = require('immutable');

const { actionCreators } = require('../redux/modules/counter');
const { actionCreators: { sendMessage } } = require('../redux/modules/chat');

let currentState = Immutable.Map({
  count: 0
});

function update(dispatch, state) {
  if (!currentState.equals(state)) {
    currentState = state;
    displayNewCount(dispatch, state.get('count'));
  }
}

function displayNewCount(dispatch, count) {
  const messageToSend = `UPDATE WITH NEW COUNT: ${count}`;
  dispatch(sendMessage(messageToSend));
}

module.exports = {
  update,
  actionCreators,
  someProp: 'someProp'
}