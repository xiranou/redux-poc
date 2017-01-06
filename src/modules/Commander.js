const Base = require('./Base');

module.exports = class Commander extends Base {
  didUpdate() {
    this.processCommand();
  }

  processCommand() {
    console.log(`I will process this command with meta: ${this.state.get('commandMeta')}`);
  }
}
