const Base = require('./Base');
const { actionCreators: { sendMessage } } = require('../redux/modules/chat');

module.exports = class Monitor extends Base {
  constructor(dispatch, state) {
    super(dispatch, state);

    this.subscribeTo = this.subscribeTo.bind(this);
  }

  didUpdate() {
    const { user: userID, room: roomID, message } = this.state.get('payload');
    console.log('...new payload recieved');

    console.log('...get user permission with auth');
    // Auth.pingDBForUserPermission()
    const permission = {
      userID,
      group: ['atp'],
      userType: ['power-user']
    };

    console.log('...parse out the command');
    // messageParser.parseCommand(payload)
    const command = {
      type: 'deploy',
      brand: 'atp',
      environment: 'ci'
    };

    console.log('...run the command with commander');
    commander.run(command, permission)
    .then(() => {
      console.log('...send message to chat');
      this.dispatch(sendMessage('!!!commmand complete!!!'));
    });
  }

  subscribeTo(monitor) {
    monitor.handlePayload(this.actions.newPayloadRecieved);
  }
}

// mock commander
const commander = {
  run: (command, permission) => {
    console.log('...commander runs the command');
    return Promise.resolve()
  }
}
