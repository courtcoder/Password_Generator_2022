// PASSWORD GENERATOR 2022
// CREATED BY COURTNEY CASCI 05/01/2022

// GLOBAL VARIABLES 
var pwLength = '';
var password = '';
var chars = '';
var genChars = '';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()';

// USER INPUT- PASSWORD LENGTH
function pwPrompt () {
    pwLength = prompt("How long would you like your Password?");
    if (pwLength < 8 || pwLength > 128) {
        alert("Password must be between 8 and 128 characters long.");
    }  if (isNaN(pwLength)) {
            alert("Password must be a number");  
            return pwPrompt(); }
}

// USER INPUT- UPPER CASE FUNCTION
function uCase1() {
    var uCase1 = "";
    uCase1 = prompt('Would you like to use an uppercase character? (Yes or No)')
    uCase1 = uCase1.toLowerCase();
    
}



