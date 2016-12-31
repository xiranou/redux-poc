const actionCreators = require('../../redux/modules/counter').actionCreators;

function willUpdate(dispatch, state) {
  console.log(state);
  console.log(`WILL UPDATE WITH NEW COUNT: ${state.get('count')}`);
}

module.exports = {
  willUpdate,
  actionCreators,
  someProp: 'someProp'
}