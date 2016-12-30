const Immutable = require('immutable');
const reducer = require('./redux/reducer');
const automator = require('./automator');

const createStore = require('redux').createStore;

const store = createStore(reducer);

automator.subscribeToStore(store);
console.log(automator);

// store.dispatch(automator.counter.increment());

// call to plugin actions
// const mookie = plugins.modules.get('mookie');
// const pluginDispatch = plugins.dispatch.bind(null, store.dispatch);

// mookie.increment(pluginDispatch);
// console.log(getStoreState());
// mookie.decrement(pluginDispatch);
// console.log(getStoreState());
// mookie.run(pluginDispatch);
// console.log(getStoreState());
