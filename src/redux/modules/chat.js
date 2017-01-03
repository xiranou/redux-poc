const Immutable = require('immutable');

const initialState = Immutable.Map({
  messageToSend: null
});
const SEND_MESSAGE = 'chat/send_message';

function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
}

function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case SEND_MESSAGE:
      return state.update('messageToSend', () => action.payload);
    default:
      return state;
  }
}

module.exports = {
  reducer,
  actionCreators: {
    sendMessage
  }
}