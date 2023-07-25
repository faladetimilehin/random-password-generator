// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var choiceArr = [];
var randomPassword = ''

// Function to prompt user for password options
function getPasswordOptions() {
  // if person chooses specialcharacter and number add them to c = ['!', 1]
  const a = [1, 2, 3];
  const b = ['d', 'e', 'f'];
  const e = ['f', 'gge', 'gf'];
  const c = a.concat(b, e);

  console.log(c);

  choiceArr = [];


  if (confirm('Click OK to confirm including special characters')) {
    choiceArr = choiceArr.concat(specialCharacters)
  }
  if (confirm('Click OK to confirm including numeric characters')) {
    choiceArr = choiceArr.concat(numericCharacters)
  }
  if (confirm('Click OK to confirm including lowercase characters')) {
    choiceArr = choiceArr.concat(lowerCasedCharacters)
  }
  if (confirm('Click OK to confirm including uppercase characters')) {
    choiceArr = choiceArr.concat(upperCasedCharacters)
  }

  console.log(choiceArr)
  if ((choiceArr.length === 0) || (choiceArr.length === '')) {
    alert('Please enter one valid character')
    return false
  }
}
// Function for getting a random element from an array
function getRandom(arr, charactersLength) {
  randomPassword = ''
  console.log(arr)
  for (var i = 0; i < charactersLength; i++) {
    console.log(arr[i])
    console.log(Math.floor(Math.random() * arr.length))
    var randomPosition = Math.floor(Math.random() * arr.length)
    randomPassword = randomPassword + choiceArr[randomPosition]
  }
  console.log(randomPassword)
  return randomPassword
}

// Function to generate password with user input
function generatePassword() {
  console.log("Generating password");
  var charactersLength = parseInt(prompt('How many characters would you like your password to contain?'))
  console.log(charactersLength, 'characters');

  if (charactersLength > 128 || isNaN(charactersLength) || charactersLength < 8) {
    alert('Password length cannot be less than 8 and more than 128 characters and enter a number')
    return false
  } else {
    getPasswordOptions();
    getRandom(choiceArr, charactersLength)
    return randomPassword
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = '';
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);