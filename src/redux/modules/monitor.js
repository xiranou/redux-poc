const Immutable = require('immutable');

const initialState = Immutable.Map({
  payload: null
});

const NEW_PAYLOAD_RECIEVED = '@MONITOR/NEW_PAYLOAD_RECIEVED';

function newPayloadRecieved(payload) {
  return {
    type: NEW_PAYLOAD_RECIEVED,
    payload
  }
}

function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case NEW_PAYLOAD_RECIEVED:
      return state.update('payload', () => action.payload);
    default:
      return state;
  }
}

module.exports = {
  reducer,
  actionCreators: {
    newPayloadRecieved
  }
}
