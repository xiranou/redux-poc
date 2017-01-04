const Base = require('./base');

const { actionCreators } = require('../redux/modules/counter');
const { actionCreators: { sendMessage } } = require('../redux/modules/chat');

module.exports = class Counter extends Base {
  constructor(dispatch, state) {
    super(dispatch, state, actionCreators);

    this.displayNewCount = this.displayNewCount.bind(this);
  }

  update(newState) {
    super.update(newState);

    this.displayNewCount();
  }

  displayNewCount() {
    const count = this.state.get('count');
    const messageToSend = `UPDATE WITH NEW COUNT: ${count}`;
    // console.log(messageToSend);
    this.dispatch(sendMessage(messageToSend));
  }
}
