const Immutable = require('immutable');
const { bindActionCreators: _bindActionCreators } = require('redux');

module.exports = class Base {
  constructor(dispatch, state, actionCreators) {
    this.state = state;
    this.dispatch = dispatch;
    this.actions = this.bindActionCreators(actionCreators, this.dispatch);

    this.update = this.update.bind(this);
    this.shouldUpdate = this.shouldUpdate.bind(this);
    this.willUpdate = this.willUpdate.bind(this);
    this.didUpdate = this.didUpdate.bind(this);
    this.bindActionCreators = this.bindActionCreators.bind(this);
  }

  update(nextState) {
    const currentState = this.state;
    const shouldUpdate = this.shouldUpdate(currentState, nextState)

    if ( shouldUpdate ) {
      this.willUpdate(currentState, nextState);

      // dear javascript
      Promise.resolve(this.state = nextState)
      .then(() => {
        this.didUpdate(currentState, nextState);
      });
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

  bindActionCreators(actionCreators) {
    const bound = Immutable.Map(_bindActionCreators(actionCreators, this.dispatch));
    return bound.map( ac => (...args) => Promise.resolve( ac(...args) ) ).toJS();
  }
}