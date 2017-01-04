const Immutable = require('immutable');

module.exports = class Base {
  constructor(dispatch, state, actionCreators) {
    this.dispatch = dispatch;
    this.state = state;

    this.mapActionCreators.call(this, actionCreators);

    this.update = this.update.bind(this);
    this.bindActionCreatorWithDispatch = this.bindActionCreatorWithDispatch.bind(this);
  }

  update(newState) {
    this.state = newState;
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