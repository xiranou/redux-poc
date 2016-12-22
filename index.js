const redux = require('redux');
const { createStore, combineReducers } = redux;
const Immutable = require('immutable');
const reducers = require('./reducers');
const actions = require('./actions');
const automator = require('./automator');
const plugins = require('./plugins');

const mergedReducers = reducers.merge(plugins.reducers).toJS();

const reducer = combineReducers(mergedReducers);
const store = createStore(reducer);

function getStoreState() {
  return Immutable.Map(store.getState());
}

store.subscribe( () => automator.listen(getStoreState(), store.dispatch) );

store.dispatch(actions.increment());

plugins.modules.get('mookie').increment(getStoreState().get('mookie'), store.dispatch);
