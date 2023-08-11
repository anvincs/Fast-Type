window.addEventListener('load', initialise);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['develop', 'exercise', 'consume', 'dump', 'sneeze', 'pointer',
'events', 'horrendous', 'quizzaciously', 'flabbergas', 'aberration', 'diaphragms',
'hexadecimal', 'optimization', 'concurrency', 'interpolation', 'camouflage', 
'gorgeous', 'innocence', 'labyrinth', 'peculiar', 'mischieve', 'alligator', 'build',
'execute', 'debug', 'agile', 'deploy', 'igneous', 'metamorphic', 'sigma', 'alpha',
'quartz', 'loiterer', 'prologue', 'cultivate', 'pungent', 'conspiracy', 'gaslight',
'alchemy', 'astrology', 'laserbeam', 'lightsaber', 'lightning', 'tsunami', 'surf', 
'cringe', 'symmetric', 'thermometer', 'muscularity', 'cutlet', 'oxymoron', 'simile',
'hyperbole', 'metaphor', 'statistics', 'probability', 'regression', 'manga', 'string',
'dungeon', 'goosebumps', 'decompose', 'valhallah'
];

function initialise() {

    seconds.innerHTML = currentLevel;

    displayWord(words);

    wordInput.addEventListener('input', Match);

    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function Match() {
    if(wordsMatch()) {
        isPlaying = true;
        time = currentLevel + 1;
        displayWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
}

function wordsMatch() {

    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct !!!';
        return true;
    }
    else {
        message.innerHTML = '';
        return false;
    }
}

function displayWord(words) {
    const randInd = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randInd];
}

function countdown() {
    if(time > 0) {
        time--;
    }
    else if(time === 0) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over !!!!';
        score = -1;
    }
}