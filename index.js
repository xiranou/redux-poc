const reducer = require('./src/redux/reducer');
const createStore = require('./src/redux/create');
const connectAndInstantiate = require('./src/redux/connect');
const observe = require('./src/redux/observe');
const setUpModules = require('./src/modules/setUpModules');
const Automator = require('./src/modules/Automator');
const monitor = require('./src/helpers/monitor');

const store = createStore(reducer);
const modules = setUpModules(store);

const automator = connectAndInstantiate(Automator, store, modules);

const unsubscribeFromStore = observe(store, automator.willRecieveState);

monitor.addSubscriber(automator);
monitor.start();