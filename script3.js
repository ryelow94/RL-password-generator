let passwordlength = parseInt(prompt("Enter the amount of characters for your password."));

while(passwordlength > 128 || passwordlength < 8 || !passwordlength) {
     passwordlength= parseInt(prompt("Password must be between 8 and 128 characters.") ); 
} 
let upperCaseConfirm = confirm("Do you want upper case letters?"); 
let lowerCaseConfirm = confirm("Do you want lower case letters?"); 
let numbersConfirm = confirm("Do you want numbers?");
let specialCharactersConfirm= confirm("Do you want special characters?"); 

while (!upperCaseConfirm && !lowerCaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
    alert("Please at least one character type."); 
    upperCaseConfirm = confirm("Do you want upper case letters?");
    lowerCaseConfirm = confirm("Do you want lower case letters?"); 
    numbersConfirm = confirm("Do you want numbers?"); 
    specialCharactersConfirm= confirm("Do you want special characters?"); 

}


const upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseArr =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbersArr = ["0","1","2","3","4","5","6","7","8","9"]
const specialCharactersArr= ["!", "@", "#", "$", "%", "^", "&","*","(", ")"] 


let generatePassword = (max) => {
    array = [];
    for (let i = 0; i < (max); i++) {   
      let randomizer = (Math.floor(Math.random() * 4));
      while (
        ((!upperCaseConfirm)&&(randomizer===0)) || ((!lowerCaseConfirm)&&(randomizer===1)) || ((!numbersConfirm)&&(randomizer===2)) || ((!specialCharactersConfirm)&&(randomizer===3)) )
        
        {
            randomizer = (Math.floor(Math.random() * 4));
      }
      if ((upperCaseConfirm)&&(randomizer===0)){
        let upperCaseRandom=(Math.floor(Math.random() * upperCaseArr.length));
        array.push(upperCaseArr[upperCaseRandom]);
      }
      if ((lowerCaseConfirm)&&(randomizer===1)) {
        let lowerCaseRandom=(Math.floor(Math.random() * lowerCaseArr.length));
        array.push(lowerCaseArr[lowerCaseRandom]);
      }
      if ((numbersConfirm)&&(randomizer===2)) {
        let numbersRandom=(Math.floor(Math.random() * numbersArr.length));
        array.push(numbersArr[numbersRandom]);
      }
      if ((specialCharactersConfirm)&&(randomizer===3)) {
        let specialCharactersRandom=(Math.floor(Math.random() * specialCharactersArr.length));
        array.push(specialCharactersArr[specialCharactersRandom]);
      }
    }
    return array;
  }
  


const generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let password = generatePassword(passwordlength).join("");
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);





