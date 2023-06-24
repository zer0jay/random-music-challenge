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
let numberOfPrefixes;
let calculatedPossibilities = 0;

// radio buttons
let adjectiveOptionOne = document.getElementById('radio-one');
let adjectiveOptionTwo = document.getElementById('radio-two');
let adjectiveOptionThree = document.getElementById('radio-three');








// initialize to dark mode
document.body.className = 'dark-theme';
btnToggle.className = 'btn-toggle btn-dark';
icon.src="./img/lightmode.svg";



const genres = [
  "house",
  "dubstep",
  "synthwave",
  "trap",
  "hybrid trap",
  "DnB",
  "hardstyle",
  "trance",
  "techno",
  "future bass",
  "riddim",
  "garage",
  "grime",
  "psytrance",
  "midtempo",
  "hip-hop",
  "hyperpop",
  "drill",
  "rock",
  "metal",
  "country",
  "pop",
  "funk",
  "polka",
  "punk",
  "jazz",
  "blues",
  "rap",
  "r&b",
  "doo-wop",
  "chiptune",
  "complextro",
  "disco",
  "reggae",
  "ska",
  "breakbeat",
  "bounce",
  "edm",
  "djent",
  "swing",
  "phonk",
  "sea-shanty",
  "scat",
  "ballad"
];

const prefixes = [
  "cinematic",
  "future",
  "emo",
  "lo-fi",
  "symphonic",
  "melodic",
  "color",
  "brutal",
  "deep",
  "obscure",
  "eccentric",
  "slow",
  "emotional",
  "murder",
  "festival",
  "angry",
  "drunk",
  "kawaii",
  "anime",
  "classical",
  "alternative",
  "ambient",
  "indie",
  "gangsta",
  "acapella",
  "glitch",
  "80s",
  "90s",
  "latin",
  "gospel",
  "industrial",
  "experimental",
  "depressing",
  "energizing",
  "comedic",
  "ultra",
  "turbo",
  "wet",
  "dry",
  "minimal",
  "maximal",
  "short",
  "tall",
  "long",
  "progressive",
  "cringe",
  "extreme",
  "wild",
  "legato",
  "staccato",
  "pizzicato",
  "avocado",
  "milennial",
  "boomer",
  "zoomer",
  "amish",
  "horizontal",
  "conceptual",
  "theoretical",
  "vertical",
  "diagonal",
  "oblique",
  "transparent",
  "shiny",
  "inverted",
  "obtuse",
  "high",
  "low",
  "middle",
  "middle-class",
  "glass",
  "icepick",
  "romantic",
  "sexy",
  "ugly",
  "happy",
  "ghost",
  "halloween",
  "christmas",
  "puppy",
  "kitty",
  "russian",
  "hungry",
  "saturated",
  "simple",
  "complex",
  "vivid",
  "dull",
  "lucid",
  "random",
  "edgy",
  "stupid",
  "genius",
  "sleepy",
  "generic",
  "unhinged",
  "8-bit",
  "bouncy",
  "gravitational",
  "monochromatic",
  "atheist",
  "dad",
  "soccer mom",
  "arrogant",
  "insane",
  "abrasive",
  "medieval",
  "sick",
  "dope",
  "stinky",
  "meme",
  "mathematical",
  "fuckin",
  "gamer",
  "baked",
  "raw",
  "cooked",
  "overcooked",
  "sample",
  "flammable",
  "corrosive",
  "poisonous",
  "political",
  "sticky",
  "uninteresting",
  "sour",
  "salty",
  "savory",
  "sweet",
  "nostalgic",
  "cheesy",
  "dangerous",
  "rhythmic",
  "harmonic",
  "abstract"
];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

const feels = ["major", "minor"];

const modes = ["dorian", "phrygian", "lydian", "mixolydian", "locrian", "aeolian", "ionian"]

// generate random number
const getRandom = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let randomNumber = Math.floor(step2) + min;

  return randomNumber;
};


//  multiplies array lengths, used to calculate total number of possible challenges
const calculate = (a, b, c, d, e, f, g, h) => {return a * b * c * d * e * f * g * h};

// display total number of possible challenges
// need to implement changing possibilities with # of prefixes
possibilitiesBefore = calculate(genres.length, prefixes.length, notes.length, feels.length, 1, 1, 1, 1) * prefixes.length * prefixes.length * prefixes.length;
possibilities.innerText = possibilitiesBefore.toLocaleString();

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

//random prefix functionality
//remove duplicates, something like if prefixes[0] === prefixes[1], prefix[0].pop
radioButtonPrefixes();
const generateRandomPrefixes = (numberOfPrefixes) => {
 let randomPrefixes = []; 
  for (let i = 0; i < numberOfPrefixes; i++) {
    let prefix = prefixes[getRandom(0, prefixes.length-1)];
    randomPrefixes.push(prefix);
  }
  return randomPrefixes.join(" ");
};




// challenge generation button functionality
btnRandom.addEventListener('click', () => {

  randomPrefix.innerText = generateRandomPrefixes(radioButtonPrefixes());

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







