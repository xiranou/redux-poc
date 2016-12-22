function increment() {
  return {
    type: 'INCREMENT'
  }
}

function decrement() {
  return {
    type: 'DECREMENT'
  }
}

module.exports = {
  increment,
  decrement
}