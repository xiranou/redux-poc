const Immutable = require('immutable');
const counter = require('./counter');
const chat = require('./chat');

const modules = Immutable.fromJS({
  counter,
  chat
});

let modulesWithDispatch;

function mapDispatchToModules(dispatch) {
  return modules.map(mod => {
    const actionCreatorsWithDispatch = mapDispatchToActionCreators(dispatch, mod.get('actionCreators'));
    return mod.flatten().merge(actionCreatorsWithDispatch);
  });
}

function mapDispatchToActionCreators(dispatch, actionCreators) {
  function mapDispatch(actionCreator) {
    return (...args) => {
      return Promise.resolve(dispatch(actionCreator(...args)));
    }
  }
  return actionCreators.map(ac => mapDispatch(ac));
}

function getModules(dispatch) {
  if (modulesWithDispatch === undefined) {
    modulesWithDispatch = mapDispatchToModules(dispatch);
  }

  return modulesWithDispatch;
}

module.exports = {
  getModules
};