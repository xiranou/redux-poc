const Base = require('./Base');
const auth = require('../helpers/auth');

// mock commander
const commander = {
  run: (command, permission) => {
    console.log('...commander runs the command');
    return Promise.resolve()
  }
}

module.exports = class Automator extends Base {
  constructor(dispatch, state, modules = {}) {
    super(dispatch, state);

    this.modules = modules
    this.subscribeTo = this.subscribeTo.bind(this);
  }

  didUpdate() {
    const { user: userID, room: roomID, message } = this.state.get('payload');
    const { commander, chat } = this.modules;

    console.log('...new payload recieved');

    console.log('...get user permission with auth');

    auth.fetchPermissionByID(userID).then(permission => {
      console.log('...parse out the command');
      // messageParser.parseCommand(payload)
      const command = {
        type: 'deploy',
        brand: 'atp',
        environment: 'ci'
      };

      console.log('...calls the commander to run the command');

      commander.messenger = chat.actions;
      return commander.actions.run(command, permission);
    })
    .then(() => {
      console.log('...payload is processed');
    });
  }

  subscribeTo(monitor) {
    monitor.handlePayload(this.actions.newPayloadRecieved);
  }
}
