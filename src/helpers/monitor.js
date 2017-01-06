const Immutable = require('immutable');

let subscribers = Immutable.List();
let payloads = Immutable.List([
  {
    user: '@UUUU',
    room: '@RRRR',
    message: '@cns deploy ci'
  },
  {
    user: '@UUUU',
    room: '@RRRR',
    message: '@cns deploy ci'
  },
  {
    user: '@PPPP',
    room: '@RRRR',
    message: '@cns deploy ci'
  }
]);

function addSubscriber(newSubscriber) {
  subscribers = subscribers.push(newSubscriber);
}

function findReadySubscriber() {
  return subscribers.find(s => s.ready, null);
}

function sendPayload(subscriber) {
  subscriber.actions.recieveNewPayload(payloads.last());
}

function popPayloadQueue() {
  payloads = payloads.pop();
}

function start() {
  console.log('--- monitor start sending payload ---');
  const subscriber = findReadySubscriber();
  if (subscriber && payloads.size > 0) {
    sendPayload(subscriber);
    popPayloadQueue();
    setTimeout(start, 1000);
  }
}

module.exports = {
  start,
  addSubscriber
}