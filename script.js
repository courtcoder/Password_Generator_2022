// PASSWORD GENERATOR 2022
// CREATED BY COURTNEY CASCI 05/01/2022

// GLOBAL VARIABLES 
var pwLength = '';
var password = '';
var chars = '';
var charsG = '';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()';




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);