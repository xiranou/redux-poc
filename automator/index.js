const Immutable = require('immutable');
const counter = require('./counter');

let modules;
// redux store binding
function subscribeToStore(store) {
  const dispatch = store.dispatch;

  function getStoreState() {
    return Immutable.Map(store.getState());
  }

  mapDispatchToActions(store);

  store.subscribe(() => {
    counter.willUpdate(getStoreState().get('counter'), dispatch);
  });
}

function mapDispatchToActions(store) {
  const dispatch = store.dispatch;

  modules = Immutable.fromJS({ counter }).map(m => m.map(prop => {
    return typeof prop === 'function' ? () => dispatch(prop(arguments)) : prop;
  })).toJS();
}

function getModules() {
  return modules || {};
}

module.exports = {
  subscribeToStore,
  getModules
}
