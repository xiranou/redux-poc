const Base = require('./Base');

const { actionCreators } = require('../redux/modules/chat');

module.exports = class Chat extends Base {
  constructor(dispatch, state) {
    super(dispatch, state, actionCreators);

    this.sendMessageToSlack = this.sendMessageToSlack.bind(this);
  }

  didUpdate(prev, curr) {
    this.sendMessageToSlack()
  }

  sendMessageToSlack() {
    const messageToSend = this.state.get('messageToSend');
    console.log(`I will send this message to chat: ${messageToSend}`);
  }
}
