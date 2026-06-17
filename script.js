let humanScore = 0;
let computerScore = 0;

const buttonsContainer = document.querySelector("#buttons");
const divResults = document.querySelector("#results");

buttonsContainer.addEventListener("click", (event) => {
    let humanChoice;

    switch (event.target.id) {
        case "rock":
            humanChoice = "pedra"
            break
        case "paper":
            humanChoice = "papel"
            break
        case "scissors":
            humanChoice = "tesoura"
            break
        default:
            return
    }

    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
})

function getComputerChoice() {
    let valorAleatorio = Math.floor(Math.random() * 3)
    if (valorAleatorio == 0) {
        return "pedra";
    } else if (valorAleatorio == 1) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
        divResults.textContent = "Empate!";
        return;

    } else if (
        (computerChoice == "pedra" && humanChoice == "papel") ||
        (computerChoice == "papel" && humanChoice == "tesoura") ||
        (computerChoice == "tesoura" && humanChoice == "pedra")
    ) {

        humanScore++;

        if (humanScore === 5) {
            divResults.textContent = "Humano venceu! "
            divResults.textContent += `Pontuação: ${humanScore} x ${computerScore}`
            humanScore = 0;
            computerScore = 0;
        } else {
            divResults.textContent = "Humano vence essa rodada! pontuação: " + humanScore;
        }

    } else {

        computerScore++;

        if (computerScore === 5) {
            divResults.textContent = "Computador venceu! "
            divResults.textContent += `Pontuação: ${computerScore} x ${humanScore}`
            humanScore = 0;
            computerScore = 0;
        } else {
            divResults.textContent = "Computador vence essa rodada! pontuação: " + computerScore;
        }
    }
}