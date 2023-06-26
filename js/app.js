//buttons
let btnRandom = document.querySelector('.btn');
let btnToggle = document.querySelector('.btn-toggle');
let btnHardMode = document.querySelector('.hard-mode');

// DOM objects
let prompt = document.querySelector('h2');
let randomPrefix = document.querySelector('.randomPrefix');
let randomGenre = document.querySelector('.randomGenre');
let randomNote = document.querySelector('.randomNote');
let randomFeel = document.querySelector('.randomFeel');
let randomMode = document.querySelector('.randomMode');
let keyOf = document.querySelector('.keyOf');
let possibilities = document.querySelector('.possibilities');
let themeIcon = document.querySelector('.theme-icon');
let icon = document.querySelector('.icon');
let challenge = document.querySelector('.challenge');
let ghLogo = document.querySelector('.gh-logo');

// global variables
let totalCombinations;
let count = 1;
let calculatedPossibilities = 0;
let numberOfPrefixes = 0;

// radio buttons
let adjectiveOptionOne = document.getElementById('radio-one');
let adjectiveOptionTwo = document.getElementById('radio-two');
let adjectiveOptionThree = document.getElementById('radio-three');

// initialize to dark mode
document.body.className = 'dark-theme';
btnToggle.className = 'btn-toggle btn-dark';
icon.src="./img/lightmode.svg";
ghLogo.src="./img/github-dark.svg";

// generate random number
const getRandom = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let randomNumber = Math.floor(step2) + min;

  return randomNumber;
};


//  multiplies array lengths, used to calculate total number of possible challenges
const calculate = (a, b, c, d) => a * b * c * d;

// display total number of possible challenges
// need to implement changing possibilities with # of prefixes
numberOfPossibilities = calculate(genres.length, prefixes.length, notes.length, feels.length) * prefixes.length * prefixes.length * prefixes.length;
possibilities.innerText = numberOfPossibilities.toLocaleString();

// radio button functionality
const radioButtonPrefixes = () => {
  if (adjectiveOptionOne.checked) {
  numberOfPrefixes = 1;
    } 
  else if (adjectiveOptionTwo.checked) {
    numberOfPrefixes = 2;
    } 
  else if (adjectiveOptionThree.checked) {
    numberOfPrefixes = 3;
    }
  return numberOfPrefixes;
};

//find and replace duplicates?


//random prefix functionality
radioButtonPrefixes();
const revisedPrefixGenerator = (numberOfPrefixes) => {
  let randomPrefixes = [];
  for (let i = 0; i < numberOfPrefixes; i++) {
    prefix = prefixes[getRandom(0, prefixes.length-1)];
    randomPrefixes.push(prefix);
  }
  return randomPrefixes;
};


const findDuplicates = () => {
  let newPrefixes = revisedPrefixGenerator(radioButtonPrefixes());
  let uniquePrefixes = new Set(newPrefixes);
  while (uniquePrefixes.size < numberOfPrefixes) {
    for (let i = 0; i < numberOfPrefixes - uniquePrefixes.size; i++){
    let newPrefix = prefixes[getRandom(0, prefixes.length-1)];
      if (uniquePrefixes.has(newPrefix) === false){
        uniquePrefixes.add(newPrefix);
      }
    }
  }
  if (uniquePrefixes.size === numberOfPrefixes) {
    finalPrefixArray = Array.from(uniquePrefixes);
  }
  return finalPrefixArray.join(" ");
};

// challenge generation button functionality

btnRandom.addEventListener('click', () => {

  randomPrefix.innerText = findDuplicates();
  let generatedGenre = getRandom(0, genres.length-1);
  randomGenre.innerText = genres[generatedGenre];

  let generatedNote = getRandom(0, notes.length-1);
  randomNote.innerText = notes[generatedNote];

  let generatedFeel = getRandom(0, feels.length-1);
  randomFeel.innerText = feels[generatedFeel];

  prompt.innerText = "Your challenge is:";
  prompt.className = ('prompt animation');
  challenge.className = ('challenge animation-delayed');
  keyOf.innerText = "in the key of";
  btnRandom.innerText = "Too hard? Wanna give up and reroll?";
});





// light/dark mode functionality
btnToggle.addEventListener('click', () => {
  count++;

  if (count % 2 === 0) {
    document.body.className = ('light-theme');
    btnToggle.className = ('btn-toggle btn-light');
    icon.src="./img/darkmode.svg";
    ghLogo.src="./img/github-light.svg";

  } else {
    document.body.className = ('dark-theme');
    btnToggle.className = ('btn-toggle btn-dark');
    icon.src="./img/lightmode.svg";
    ghLogo.src="./img/github-dark.svg";
  }
});



