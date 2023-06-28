//buttons
let btnRandom = document.querySelector('.btn');
let btnToggle = document.querySelector('.btn-toggle');
let btnHardMode = document.querySelector('.hard-mode');

// DOM objects
let prompt = document.querySelector('h2');
let randomPrefix = document.querySelector('.randomPrefix');
let prefix1 = document.getElementById('prefix1');
let prefix2 = document.getElementById('prefix2');
let prefix3 = document.getElementById('prefix3');
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
let challengeCount = 0;

// radio buttons
let adjectiveOptionNone = document.getElementById('radio-none');
let adjectiveOptionOne = document.getElementById('radio-one');
let adjectiveOptionTwo = document.getElementById('radio-two');
let adjectiveOptionThree = document.getElementById('radio-three');

// initialize to dark mode
// document.body.className = 'dark-theme';
// btnToggle.className = 'btn-toggle btn-dark';
// icon.src="./img/lightmode.svg";
// ghLogo.src="./img/github-dark.svg";

function setDefaultState() {
  numberOfPossibilities =(genres.length * notes.length *feels.length);
  possibilities.innerText = numberOfPossibilities.toLocaleString();
  document.body.className = 'dark-theme';
  btnToggle.className = 'btn-toggle btn-dark';
  icon.src="./img/lightmode.svg";
  ghLogo.src="./img/github-dark.svg";
};

setDefaultState();
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

//possible solution
let radio0 = document.querySelector('.adj-none');
radio0.onclick = () => {
  numberOfPossibilities = calculate(genres.length, 1, notes.length, feels.length);
  possibilities.innerText = numberOfPossibilities.toLocaleString();
  possibilities.classList.add('animation');
};

let radio1 = document.querySelector('.adj-one');
radio1.onclick = () => {
  numberOfPossibilities = calculate(genres.length, prefixes.length, notes.length, feels.length);
  possibilities.innerText = numberOfPossibilities.toLocaleString();
  possibilities.classList.add('animation');
}

let radio2 = document.querySelector('.adj-two');
radio2.onclick = () => {
  numberOfPossibilities = calculate(genres.length, prefixes.length**2, notes.length, feels.length);
  possibilities.innerText = numberOfPossibilities.toLocaleString();
  possibilities.classList.add('animation');
};

let radio3 = document.querySelector('.adj-three');
radio3.onclick = () => {
  numberOfPossibilities = calculate(genres.length, prefixes.length**3, notes.length, feels.length);
  possibilities.innerText = numberOfPossibilities.toLocaleString();
  possibilities.classList.add('animation');
}

possibilities.onanimationend = () => {
  possibilities.classList.remove('animation');
};

// radio button functionality
const setNumberOfPrefixes = () => {
  if (adjectiveOptionNone.checked) {
    numberOfPrefixes = 0;
  }
  else if (adjectiveOptionOne.checked) {
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

//random prefix functionality
setNumberOfPrefixes();
const revisedPrefixGenerator = (numberOfPrefixes) => {
  let randomPrefixes = [];
  for (let i = 0; i < numberOfPrefixes; i++) {
    prefix = prefixes[getRandom(0, prefixes.length-1)];
    randomPrefixes.push(prefix);
  }
  return randomPrefixes;
};


const setFinalPrefixArray = () => {
  let newPrefixes = revisedPrefixGenerator(setNumberOfPrefixes());
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
  challengeCount++;
  setFinalPrefixArray();
  //randomPrefix.innerText = setFinalPrefixArray();
  if (finalPrefixArray.length === 1){
    prefix1.innerText = finalPrefixArray[0];
    prefix2.innerText = "";
    prefix3.innerText = "";
  }
  else if (finalPrefixArray.length === 2) {
    prefix1.innerText = finalPrefixArray[0];
    prefix2.innerText = finalPrefixArray[1];
    prefix3.innerText = "";
  }
  else if (finalPrefixArray.length === 3) {
    prefix1.innerText = finalPrefixArray[0];
    prefix2.innerText = finalPrefixArray[1];
    prefix3.innerText = finalPrefixArray[2];
  }
  

  let generatedGenre = getRandom(0, genres.length-1);
  randomGenre.innerText = genres[generatedGenre];

  let generatedNote = getRandom(0, notes.length-1);
  randomNote.innerText = notes[generatedNote];

  let generatedFeel = getRandom(0, feels.length-1);
  randomFeel.innerText = feels[generatedFeel];

  prompt.innerText = "Your challenge is:";
  prompt.className = ('prompt animation');
  if (challengeCount === 1){
    challenge.classList.add('animation-delayed');
  } else {
    challenge.classList.add('reroll-animation');
  }
  
  keyOf.innerText = "in the key of";
  btnRandom.innerText = "Too hard? Wanna give up and reroll?";
});

challenge.onanimationend = () => {
  if (challengeCount === 1) {
    challenge.classList.remove('animation-delayed');
  } else {
    challenge.classList.remove('reroll-animation');
  }
};

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



