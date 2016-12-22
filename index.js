const redux = require('redux');
const { createStore, combineReducers } = redux;
const Immutable = require('immutable');
const counter = require('./reducers/counter');
const actions = require('./actions');
const automator = require('./automator');

const reducer = combineReducers({ counter });
const store = createStore(reducer);

store.subscribe( () => automator.listen(Immutable.Map(store.getState()), store.dispatch) );


store.dispatch(actions.increment());
