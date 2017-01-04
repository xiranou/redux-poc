const Base = require('./base');

const { actionCreators } = require('../redux/modules/counter');

module.exports = class Counter extends Base {
  constructor(dispatch, state) {
    super(dispatch, state, actionCreators);

    this.displayNewCount = this.displayNewCount.bind(this);
  }

  willUpdate() {
    this.displayNewCount();
  }

  displayNewCount() {
    const count = this.state.get('count');
    const messageToSend = `UPDATE WITH NEW COUNT: ${count}`;
    return messageToSend;
  }
}
