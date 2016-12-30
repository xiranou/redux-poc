const createStore = require('redux').createStore;
const reducer = require('./reducer');
const store = createStore(reducer);

module.exports = store;