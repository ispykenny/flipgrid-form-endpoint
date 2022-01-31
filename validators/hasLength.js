module.exports.hasLength = (string) => {
  if(string) {
    if(string.trim() < 1) {
      return {
        has_errors: true,
        error_message: 'No name entered. Please enter a name.'
      }
    } else {
      return {
        has_errors: true,
        error_message: 'No name entered. Please enter a name.'
      }
    }
  }
}