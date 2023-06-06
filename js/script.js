let btnRandom = document.querySelector('.btn');
let prompt = document.querySelector('h2');
let randomPrefix = document.querySelector('.randomPrefix');
let randomGenre = document.querySelector('.randomGenre');
let randomNote = document.querySelector('.randomNote');
let randomFeel = document.querySelector('.randomFeel');
let keyOf = document.querySelector('.keyOf');


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
  "drill"
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
  "anime"
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
function getRandomGenre(min, max) {
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






