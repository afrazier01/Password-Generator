// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  console.log('The button was clicked')
  randomPassword = ''
  passwordCriteria = ''
 
  //Prompt user for password criteria
  var passwordLength = prompt('Choose password length:')
  if (passwordLength < 8 || passwordLength > 128) {
    console.error('User input in not within valid range')
    alert('Invalid Value: Password must be in between 8 and 128 characters.' )
    return
  }

  //Character Prompts
  var lowercasePrompt = prompt('Do you want to include lowercase characters?')
  if (lowercasePrompt === 'yes') {
    passwordCriteria += 'abcdefghijklmnopqrstuvwuxyz'
  }
  askUser1 = confirm('You selected: '+ lowercasePrompt.toUpperCase() + '. \nIf this is correct please click OK or enter, otherwise cancel this request and try again.')
  if (askUser1 === false) {
    event.preventDefault()
    return
  } 

  var uppercasePrompt = prompt('Do you want to include uppercase characters?')
  if (uppercasePrompt === 'yes') {
    passwordCriteria += 'ABCDEFGHIJKLMNOPQRSTUVWUXYZ'
  }
  askUser2 = confirm('You selected: '+ uppercasePrompt.toUpperCase() + '. \nIf this is correct please click OK or enter, otherwise cancel this request and try again.')
  if (askUser2 === false) {
    event.preventDefault()
    return
  } 
  
  var numbersPrompt = prompt('Do you want to include numbers?')
  if (numbersPrompt === 'yes') {
    passwordCriteria += '0123456789'
  } 
  askUser3 = confirm('You selected: '+ numbersPrompt.toUpperCase() + '. \nIf this is correct please click OK or enter, otherwise cancel this request and try again.')
  if (askUser3 === false) {
    event.preventDefault()
    return
  } 

  var specialChartactersPrompt = prompt('Do you want to include special characters?')
  if (specialChartactersPrompt === 'yes') {
    passwordCriteria += '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  } 
  askUser4 = confirm('You selected: '+ specialChartactersPrompt.toUpperCase() + '. \nIf this is correct please click OK or enter, otherwise cancel this request and try again.')
  if (askUser4 === false) {
    event.preventDefault()
    return
  }

  //no input selected
  if (passwordCriteria === '') {
    alert('You did not enter any criteria. Please try again')
    return
  }
  
  //Log user inputs to console
  console.log('User selected',passwordLength,'for the password length\n They selected:',lowercasePrompt,'for lower case characters\n They selected:',uppercasePrompt,'for upper case characters\n They selected:',numbersPrompt,'for numbers\n They selected:',specialChartactersPrompt,'for special characters')

  //generate password
  for (var i = 0; i < passwordLength; i++) {
    randomPassword += passwordCriteria.charAt(Math.floor(Math.random() * passwordCriteria.length))
//https://www.youtube.com/watch?v=jww3V2fSQyg&t=190s
  }                             
  
  console.log(randomPassword)
  document.getElementById('password').innerHTML = randomPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
