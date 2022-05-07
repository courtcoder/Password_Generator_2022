//  GLOBAL VARIABLES
var pwdLength = "";
var password = "";
var characters = "";
var reqChars = "";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numChar = "0123456789";
var specChars = "!@#$%^&*()";

//  PASSWORD LENGTH
function pwPrompt() {
  pwdLength = prompt("How Long Would You Like Your Password?");
  // VALIDATE ANSWER IS BETWEEN 8 AND 128
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 in length");
    pwPrompt();
  }
  if (isNaN(pwdLength)) {
    alert("Password must be a number");
    return pwPrompt();
  }
}

//  UPPERCASE FUNCTION
function upperCase() {
  var upperCase = "";
  upperCase = prompt("Would You Like to Include Uppercase? (yes or no)");
  upperCase = upperCase.toLowerCase();
  if (upperCase === "yes") {
    var randomNum = Math.floor(Math.random() * upperCaseChars.length);
    characters += upperCaseChars;
 reqChars += upperCaseChars.charAt(randomNum);
  } else if (upperCase === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    upperCase();
  }
}

//  LOWERCASE FUNCTION
function lowerCase() {
  var lowerCase = "";
  lowerCase = prompt("Would You Like To Include Lowercase? (yes or no)");
  lowerCase = lowerCase.toLowerCase();
  if (lowerCase === "yes") {
    var randomNum = Math.floor(Math.random() * lowerCaseChars.length);
    characters += lowerCaseChars;
 reqChars += lowerCaseChars.charAt(randomNum);
  } else if (lowerCase === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    lowerCase();
  }
}

//  NUMBERS FUNCTION
function numPick() {
  var numPick = "";
  numPick = prompt('Would You Like To Include "numbers"? (yes or no)');
  numPick = numPick.toLowerCase();
  if (numPick === "yes") {
    var randomNum = Math.floor(Math.random() * numChars.length);
    characters += numChars;
 reqChars += numChars.charAt(randomNum);
  } else if (numPick === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    numPick();
  }
}

//  SPECIAL CHARACTERS FUNCTION
function numPick2() {
  var numPick = "";
  numPick = prompt(
    "Would You Like To Include Special Characters (special)? (yes or no)"
  );
  numPick = numPick.toLowerCase();
  if (numPick === "yes") {
    var randomNum = Math.floor(Math.random() * specChars.length);
    characters += specChars;
 reqChars += specChars.charAt(randomNum);
  } else if (numPick === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    numPick2();
  }
}

//
function failSafe() {
  var failSafe1 = reqChars.length;
  if (failSafe1 < 1) {
    alert("You Must Pick At Least One!");
    generatePassword();
  }
}

//     Generator for above chosen criteria
function generatePassword() {
  pwPrompt();
  upperCase();
  lowerCase();
  numPick();
  numPick2();
  failSafe();
  var allChars = pwdLength - reqChars.length;
  for (var i = 0; i <= allChars; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum + 1);
  }
  password += reqChars;
  //Vallidating your password
  return password;
}

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
