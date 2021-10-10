const store = require('../store')
// require('./logic')
const signUpSuccess = (responseData) => {
  $('#movies-display').text('Signed up successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is :', responseData)
}

const signUpFailure = e => {
  $('#movies-display').text('Signed up Failure!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-danger')

  console.error('error is ', e)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  console.log(store)
  $('#movies-display').text('Signed In successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  console.log('responseData is :', responseData)
}

const changePasswordSuccess = (responseData) => {
  $('#movies-display').text('Changed Password successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('responseData is :', responseData)
}

const changePasswordFailure = (e) => {
  $('#movies-display').text('Changing Passwords Failed!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-danger')

  console.error('error is ', e)
}

const signOutSuccess = (responseData) => {
  $('#movies-display').text('SignOut successfully!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  console.log('responseData is :', responseData)
}

const signOutFailure = (e) => {
  $('#movies-display').text('SignOut Failed!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-danger')

  console.error('error is ', e)
}

const startGameSuccess = (responseData) => {
  $('#movies-display').text('StarGame Successful!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  console.log(responseData)
}

const startGameFailure = () => {
  $('#movies-display').text('StartGame Failed!')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-danger')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure
}
