const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const logic = require('./logic')

const onSignUp = event => {
  event.preventDefault()
  //   event.target is the from that caused the submit event
  const form = event.target
  //   get the data from the form element
  const formData = getFormFields(form)
  // make a post /signup request, pass it the email/password/confirmation
  api.signUp(formData)
  //   if our sign up is successful run the then function
    .then(ui.signUpSuccess)
    // if our sign up fails run the catch
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  //   event.target is the from that caused the submit event
  const form = event.target
  //   get the data from the form element
  const formData = getFormFields(form)
  // make a post /signup request, pass it the email/password/confirmation
  api
    .signIn(formData)
    .then(ui.signInSuccess)
    // if our sign up fails run the catch
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  //   event.target is the from that caused the submit event
  const form = event.target
  //   get the data from the form element
  const formData = getFormFields(form)
  // make a Patch /change-password request, pass it the old password/new password
  api
    .changePassword(formData)
    //   if our sign up is successful run the then function
    .then(ui.changePasswordSuccess)
    // if our sign up fails run the catch
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  //   event.target is the from that caused the submit event
  const form = event.target
  //   get the data from the form element
  // const formData = getFormFields(form)
  // make a Patch /change-password request, pass it the old password/new password
  api
    .signOut(form)
    //   if our sign up is successful run the then function
    .then(ui.signOutSuccess)
    // if our sign up fails run the catch
    .catch(ui.signOutFailure)
}

const onStartGame = (event) => {
  event.preventDefault()
  const form = event.target
  api.startGame(form)
    .then(ui.startGameSuccess, logic)
    .catch(ui.startGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame
}
