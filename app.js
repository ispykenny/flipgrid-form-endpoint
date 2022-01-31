const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser');
const {emailValidator} = require('./validators/email')
const {checkForErrors} = require('./validators/cleanString');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.use('/sign-up', (req, res) => {
  const { first_name, email, password } = req.body
  const errors = [];  
  let returned_password = '';

  if(password) {
    returned_password = password.trim();
  }
  
  if(!checkForErrors(first_name).has_errors && emailValidator(email) && returned_password.length > 0) {  
    res.json({
      passed_credentials: true,
      user: {
        name: first_name.trim().split(' ')[0],
        email: email
      }
    })
  } else {

    if(checkForErrors(first_name).has_errors) {
      errors.push({
        type: 'first_name',
        message: checkForErrors(first_name).error_message
      })
    }
    if(!emailValidator(email)) {
      errors.push({
        type: 'email',
        message: 'Bad email'
      })
    }

    if(returned_password.length <= 0) {
      errors.push({
        type: 'password',
        message: 'Cannot use only spaces for password'
      })
    }
    
    res.json({
      passed_crendetials: false, 
      errors: errors
    })
  }  
})

app.listen(PORT ,() => {
  console.log(`listening on ${PORT}`)
})