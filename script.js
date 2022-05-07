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
  lowerCase = prompt("Would you like to include Lowercase (yes or no)");
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
function numbChars() {
  var numbChars = "";
  numbChars = prompt("Would you like to include numbers? (yes or no)");
  numbChars = numbChars.toLowerCase();
  if (numbChars === "yes") {
    var randomNum = Math.floor(Math.random() * numbChars.length);
    characters += numChar;
    reqChars += numChar.charAt(randomNum);
  } else if (numbChars === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    numbChars();
  }
}

//  SPECIAL CHARACTERS FUNCTION
function specialChars() {
  var specialChars = "";
  specialChars = prompt(
    "Would You Like To Include Special Characters? (yes or no)"
  );
  specialChars = specialChars.toLowerCase();
  if (specialChars === "yes") {
    var randomNum = Math.floor(Math.random() * specChars.length);
    characters += specChars;
    reqChars += specChars.charAt(randomNum);
  } else if (specialChars === "no") {
    characters = characters;
  } else {
    alert("Must be entered as 'yes' or 'no'");
    specialChars();
  }
}

// TELLS USER MUST PICK ONE (UPPERCASE, LOWERCASE, NUMBER, SPECIAL)
function mustPick() {
  var mustPick1 = reqChars.length;
  if (mustPick1 < 1) {
    alert("You Must Pick At Least One!");
    generatePassword();
  }
}

function generatePassword() {
  pwPrompt();
  upperCase();
  lowerCase();
  numbChars();
  specialChars();
  mustPick();
  var allChars = pwdLength - reqChars.length;
  for (var i = 0; i <= allChars; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNum, randomNum + 1);
  }
  password += reqChars;

  return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
