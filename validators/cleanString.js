module.exports.checkForErrors = (name) => {
// check if numbers are in string
  const checkIfNumbersRegex = /\d+/g
// check if symbols are in string
  const checkIfSymbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

  if(name) {
    if(name.trim() < 1) {
      return {
        has_errors: true,
        error_message: 'No name entered. Please enter a name.'
      }
    } else if(name.match(checkIfNumbersRegex) || name.match(checkIfSymbolsRegex)) {
      return {
        has_errors: true,
        error_message: 'Name must not contain numbers and or symbols.'
      }
    } else {
      return {
        has_errors: false,
        error_message: 'success.'
      }
    }
  } else {
    return {
      has_errors: true,
      error_message: 'No name entered. Please enter a name.'
    }
  }
}