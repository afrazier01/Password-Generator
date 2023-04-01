// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('The button was clicked')

  //Prompt user for password criteria
  var passwordLength = prompt('Choose password length:')
  if (passwordLength < 8 || passwordLength > 128) {
    console.error('password must be at least 8 characters and no more than 128 characters')

    return
  }

  
  var lowercasePrompt = prompt('Include Lowercase?')
  var lowercasePrompt = prompt('Include Uppercase?')
  var lowercasePrompt = prompt('Include Number?')
  var lowercasePrompt = prompt('Include Special Characters?')
  
  
  console.log('User selected',passwordLength,'for the password length.')
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
