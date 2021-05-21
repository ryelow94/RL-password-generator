// Assignment Code 
// Uppercase var
var upperCase = [
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F",
    "G", 
    "H",
    "I",
    "J",
    "K", 
    "L",
    "M",
    "N",
    "O",
    "P",
    'Q',
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X", 
    "Y",
    "Z",
  ];  
  
  // lowercase var 
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]; 
  // number var 
  var numberSelection = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ] ; 
  //Special characters var 
   var specialCharcter = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "/",
    "?",
  ];
  
  function askPasswordDetails (){ 
    var length = parseInt (
      prompt('Enter the amount of characters for your password')
    ); 
  
    if (length >= 8 && length < 128) {
      var containLowercase = confirm('Do you want lowercase letters in your password?');
      if (containLowercase) {
        window.alert ( 'Password will contain lowercase letters');
      };
      var containUppercase = confirm ('Do you want uppercase letters in your password?') ;
        if (containUpperCase) {
          window.alert ("Password will contain uppercase letters");
        };
      var containNumberSelection = confirm(' Do you want numbers in you password?');
        if (containNumberSelection) {
          window.alert ('Password will contain numbers');
        };
      var containSpecialCharacter = confirm('Do you want special characters in your password?') 
        if (containSpecialCharacter) {
          window.alert ('Password will contain special characters')
        }
    } 
    var passwordDetails = {
      length: length, 
      containLowercase: containLowercase,
      containUppercase: containUppercase, 
      containNumberSelection: containNumberSelection, 
      containSpecialCharacter: containSpecialCharacter,
    }
    return passwordDetails;
  }
  function randomize(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[ randomIndex];
    return randomElement;
  }
  function createPassword() {
    var options = askPasswordDetails (); 
    var result = []; 
    var allCharacters = [];
    var necessaryCharacters = [];
  
    if (options.containLowercase) {
      allCharacters = allCharacters.concat (lowerCase)
      necessaryCharacters.push(randomize (lowerCase));
    } 
    if (options.containUppercase) {
      allCharacters = allCharacters.concat (upperCase)
      necessaryCharacters.push (randomize (upperCase));
    }
    if (options.containNumberSelection) {
      allCharacters = allCharacters.concat (numberSelection)
      necessaryCharacters.push (randomize (numberSelection));
  
    if (options.containSpecialCharacter) {
      allCharacters = allCharacters.concat (specialCharcter); 
      necessaryCharacters.push (randomize (specialCharcter));
    } 
    for (i = 0; i < options.length; i++) {
      var characters = randomize(allCharacters)
      result.push(characters); 
  
      for (i = 0; i < necessaryCharacters.length; i++) {
        result[i] = necessaryCharacters[i]; 
      } 
      return result.join ("");
    }
  
  
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)