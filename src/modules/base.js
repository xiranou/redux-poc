const { bindActionCreators } = require('redux');

module.exports = class Base {
  constructor(dispatch, state, actionCreators) {
    this.state = state;
    this.dispatch = dispatch;
    this.actions = bindActionCreators(actionCreators, this.dispatch);

    this.update = this.update.bind(this);
    this.shouldUpdate = this.shouldUpdate.bind(this);
    this.willUpdate = this.willUpdate.bind(this);
  }

  update(nextState) {
    const currentState = this.state;
    const shouldUpdate = this.shouldUpdate(currentState, nextState)

    if ( shouldUpdate ) {
      this.willUpdate(currentState, nextState);

      this.state = this.state.mergeDeep(nextState);

      this.didUpdate(currentState, nextState);
    };

    return nextState;
  }

  shouldUpdate(currentState, nextState) {
    return !currentState.equals(nextState);
  }

  willUpdate(currentState, nextState) {
    return currentState;
  }

  didUpdate(prevState, currentState) {
    return currentState;
  }
}