const { actionCreators } = require('../redux/modules/chat');
const { sendMessage } = actionCreators;

function update(dispatch, state) {
  const messageToSend = state.get('messageToSend');
  console.log(`I will send this message: ${messageToSend}`);
}

module.exports = {
  update,
  actionCreators
}