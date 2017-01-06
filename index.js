const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const connectAndInstantiate = require('./src/redux/connect');
const setUpModules = require('./src/modules/setUpModules');
const Automator = require('./src/modules/Automator');
const monitor = require('./src/helpers/monitor');

const store = createStore(reducer);
const modules = setUpModules(store);

const automator = connectAndInstantiate(Automator, store, modules);

const {
  counter,
  chat
} = automator.modules;

monitor.addSubscriber(automator);
