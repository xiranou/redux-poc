const { actionCreators } = require('../redux/modules/counter');

function update(dispatch, state) {
  console.log(state);
  console.log(`UPDATE WITH NEW COUNT: ${state.get('count')}`);
}

module.exports = {
  update,
  actionCreators,
  someProp: 'someProp'
}