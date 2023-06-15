let btnRandom = document.querySelector('.btn');
let btnToggle = document.querySelector('.btn-toggle');
let prompt = document.querySelector('h2');
let randomPrefix = document.querySelector('.randomPrefix');
let randomGenre = document.querySelector('.randomGenre');
let randomNote = document.querySelector('.randomNote');
let randomFeel = document.querySelector('.randomFeel');
let keyOf = document.querySelector('.keyOf');
let possibilities = document.querySelector('.possibilities');
let themeIcon = document.querySelector('.theme-icon');
let icon = document.querySelector('.icon');
let totalCombinations;
let count = 0;

// initialize to light mode
document.body.className = 'light-theme';
btnToggle.className = 'btn-toggle btn-light';
icon.src="./darkmode.svg";



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
  "gospel",
  "breakbeat",
  "bounce",
  "edm",
  "djent"
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
  "1920s",
  "1930s",
  "1940s",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
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
  "abrasive"
];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

const feels = ["major", "minor"];

// generate random number
const getRandom = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let randomNumber = Math.floor(step2) + min;

  return randomNumber;
}


// reusable function to multiply array lengths, used to calculate total number of possible challenges
const calculate = (a, b, c, d) => {return a.length * b.length * c.length * d.length};


// display total number of possible challenges
possibilities.innerText = calculate(genres, prefixes, notes, feels);

// challenge generation button functionality
btnRandom.addEventListener('click', () => {
  let generatedPrefix = getRandom(0, prefixes.length-1);
  randomPrefix.innerText = prefixes[generatedPrefix];

  let generatedGenre = getRandom(0, genres.length-1);
  randomGenre.innerText = genres[generatedGenre];

  let generatedNote = getRandom(0, notes.length-1);
  randomNote.innerText = notes[generatedNote];

  let generatedFeel = getRandom(0, feels.length-1);
  randomFeel.innerText = feels[generatedFeel];

  prompt.innerText = "Your challenge is:";
  keyOf.innerText = "in the key of";
  btnRandom.innerText = "Too hard? Wanna give up and reroll?";
});

// light/dark mode functionality
btnToggle.addEventListener('click', () => {
  count+= 1;

  if (count % 2 === 0) {
    document.body.className = ('light-theme');
    btnToggle.className = ('btn-toggle btn-light');
    icon.src="./darkmode.svg";
  } else {
    document.body.className = ('dark-theme');
    btnToggle.className = ('btn-toggle btn-dark');
    icon.src="./lightmode.svg";
  }
});







