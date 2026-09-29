const result = document.getElementById("result");
const userScore = document.getElementById("user-score");
const alexaScore = document.getElementById("alexa-score");

let userScoreValue = 0;
let alexaScoreValue = 0;

const playHuman = (humanChoice) => {
   
    playTheGame(humanChoice, playAlexa());
}

const playAlexa = () => {
    const options = ["rock", "paper", "scissors"];
    
    const randomIndex = Math.floor(Math.random() * options.length);
    const alexaChoice = options[randomIndex];
    return alexaChoice;
}

const playTheGame = (human, alexa) => {
    if (human === alexa) {
        document.getElementById("result").innerText = "Empate!";
    } else if (
        (human === "rock" && alexa === "scissors") ||
        (human === "paper" && alexa === "rock") ||
        (human === "scissors" && alexa === "paper")
    ) {
        result.innerText = "Você ganhou!";
        userScoreValue++;
        userScore.innerText = userScoreValue;
    } else {
        result.innerText = "Alexa ganhou!";
        alexaScoreValue++;
        alexaScore.innerText = alexaScoreValue;
    }
}