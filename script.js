let lives = 7;
let gameState = 1;
const words = ["BEAUTIFUL", "BOOKCASE", "WARDROBE", "ELEPHANT", "FINGERS", "WEATHER", "MOUNTAINS", "SNOWFLAKE", "SNOWMAN"];
const word = words[Math.floor(Math.random() * words.length)];
const guessedLetters = [];

function wordToGuess() {
    for (let i = 0; i < word.length; ++i) {
        guessedLetters[i] = "_";
        document.getElementById("randomWord").innerHTML += "_ ";
    }
}

function stateOfTheGame() {
    if (lives == 0) {
        gameState = 0;
        document.getElementById("randomWord").innerHTML = "";
        for (let i = 0; i < word.length; ++i) {
            document.getElementById("randomWord").innerHTML += (word[i] + " ");
        }
        document.getElementById("gameState").innerHTML = "NEXT TIME WILL BE BETTER!";
    } else if (!guessedLetters.includes("_")) {
        gameState = 0;
        document.getElementById("gameState").innerHTML = "YOU DID GREAT!";
    }
}

function verifyLetter(currentLetter) {
    if (gameState == 0) {
        return;
    }
    document.getElementById("randomWord").innerHTML = "";
    let isFound = 0;
    for (let i = 0; i < word.length; ++i) {
        if (currentLetter.innerHTML == word[i]) {
            guessedLetters[i] = word[i];
            isFound = 1;
        }
        document.getElementById("randomWord").innerHTML += (guessedLetters[i] + " ");
     }
    if (isFound == 0) {
        document.getElementById("lives").innerHTML = "Lives left: " + --lives;
    }
    stateOfTheGame();
}