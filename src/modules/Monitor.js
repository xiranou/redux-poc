const Base = require('./Base');

module.exports = class Monitor extends Base {
  constructor(dispatch, state) {
    super(dispatch, state);
  }

  didUpdate() {
    console.log('how to do what is next?');
  }
}