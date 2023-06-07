let btnRandom = document.querySelector('.btn');
let btnLightDark = document.querySelector('.btn-light-dark');
let prompt = document.querySelector('h2');
let randomPrefix = document.querySelector('.randomPrefix');
let randomGenre = document.querySelector('.randomGenre');
let randomNote = document.querySelector('.randomNote');
let randomFeel = document.querySelector('.randomFeel');
let keyOf = document.querySelector('.keyOf');
let possibilities = document.querySelector('.possibilities');
let totalCombinations;



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
  "edm"
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
];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

const feels = ["major", "minor"];

// generate random prefix
function getRandomPrefix(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let generatedPrefix = Math.floor(step2) + min;

  return generatedPrefix;
}

// generate random genre
const getRandomGenre = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let generatedGenre = Math.floor(step2) + min;

  return generatedGenre;
}
// generate random note
function getRandomNote(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let generatedNote = Math.floor(step2) + min;

  return generatedNote;
}



// generate feel
function getRandomFeel(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let generatedFeel = Math.floor(step2) + min;

  return generatedFeel;
}

// calculate total number of possible combinations
function calculateTotalPossiblilities() {
   totalCombinations = prefixes.length * genres.length * notes.length * feels.length;
    return totalCombinations;
}

// button functionality
btnRandom.addEventListener('click', () => {
  let generatedPrefix = getRandomPrefix(0, prefixes.length-1);
  randomPrefix.innerText = prefixes[generatedPrefix];

  let generatedGenre = getRandomGenre(0, genres.length-1);
  randomGenre.innerText = genres[generatedGenre];

  let generatedNote = getRandomNote(0, notes.length-1);
  randomNote.innerText = notes[generatedNote];

  let generatedFeel = getRandomFeel(0, feels.length-1);
  randomFeel.innerText = feels[generatedFeel];

  prompt.innerText = "Your challenge is:";
  keyOf.innerText = "in the key of";
  btnRandom.innerText = "Reroll?";
});

btnLightDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  });

calculateTotalPossiblilities();
possibilities.innerText = totalCombinations;





