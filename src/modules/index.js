const Immutable = require('immutable');
const counter = require('./counter');
const modules = Immutable.fromJS({
  counter
});

let modulesWithDispatch;

function mapDispatchToModules(dispatch) {
  return modules.map(mod => {
    const actionCreatorsWithDispatch = mapDispatchToActionCreators(dispatch, mod.get('actionCreators'));
    return mod.flatten().merge(actionCreatorsWithDispatch);
  });
}

function mapDispatchToActionCreators(dispatch, actionCreators) {
  return actionCreators.map(ac => (...args) => dispatch(ac(...args)));
}

function getModules(dispatch) {
  if (modulesWithDispatch === undefined) {
    modulesWithDispatch = mapDispatchToModules(dispatch);
  }

  return modulesWithDispatch;
}

module.exports = getModules;