const Immutable = require('immutable');

module.exports = class Base {
  constructor(dispatch, state, actionCreators) {
    this.dispatch = dispatch;
    this.state = state;

    this.mapActionCreators.call(this, actionCreators);

    this.update = this.update.bind(this);
    this.shouldUpdate = this.shouldUpdate.bind(this);
    this.willUpdate = this.willUpdate.bind(this);
    this.bindActionCreatorWithDispatch = this.bindActionCreatorWithDispatch.bind(this);
  }

  update(newState) {
    const currentState = this.state;
    const shouldUpdate = this.shouldUpdate(currentState, newState)

    if ( shouldUpdate ) {
      this.state = newState;

      this.willUpdate(currentState, newState);
    };

    return newState;
  }

  shouldUpdate(currentState, newState) {
    return !currentState.equals(newState);
  }

  willUpdate(prevState, currentState) {
    return currentState;
  }

  mapActionCreators(actionCreators) {
    Immutable.fromJS(actionCreators).map((ac, name) => {
      this[name] = this.bindActionCreatorWithDispatch(ac)
    });
  }

  bindActionCreatorWithDispatch(ac) {
    return (...args) => Promise.resolve( this.dispatch( ac(...args) ) );
  }
}