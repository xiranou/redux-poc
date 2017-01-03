const Immutable = require('immutable');

const { actionCreators } = require('../redux/modules/chat');
const { sendMessage } = actionCreators;

let currentState = Immutable.Map();

function update(dispatch, state) {
  if (!currentState.equals(state)) {
    currentState = state;
    const messageToSend = state.get('messageToSend');
    sendMessageToSlack(messageToSend);
  }
}

function sendMessageToSlack(messageToSend) {
  console.log(`I will send this message: ${messageToSend}`);
}

module.exports = {
  update,
  actionCreators
}