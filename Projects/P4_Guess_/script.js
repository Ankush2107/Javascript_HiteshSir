let randomNumber = parseInt(Math.random() * 100 + 1);  // generating a random number

const submit = document.querySelector('#subt');        // Accessing submit botton
const userInput = document.querySelector('#guessField'); // box on which we input our number
const guessSlot = document.querySelector('.Pguesses');  // previous guessed number
const remaining = document.querySelector('.lastResult'); // remaining guesses
const lowOrHi = document.querySelector('.lowOrHi');  // give you info about the number you have entered is high or low
const startOver = document.querySelector('.resultParas');  // after submit button content

const p = document.createElement('p');


let prevGuess = [];  // It is storing my all previous guesses
let numGuess = 1;    // how many chances are left

let playGame = true;

if(playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
};

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100) {
        alert('Please enter a number less than 100')
    }else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess)
            displayGuess(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage('Hurrey You Won');
        endGame()
    } else if(guess < randomNumber) {
        displayMessage('Number is too low');
    } else if(guess > randomNumber) {
        displayMessage('Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function endGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener("click", function(e) {

        randomNumber = parseInt(Math.random() + 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('display');
        startOver.removeChild(p);


        playGame = true;
    });
}