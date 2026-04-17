function getComputerChoice() {
    let valorAleatorio = Math.floor(Math.random() * 3)
    if (valorAleatorio == 0) {
        return "pedra"
    } else if (valorAleatorio == 1) {
        return "papel"
    } else {
        return "tesoura"
    }
}

function getHumanChoice() {
    let inputValorHumano = prompt("Escolha um entre: \n PEDRA \n PAPEL \n TESOURA").toLowerCase()

    if (inputValorHumano == "pedra" || inputValorHumano == "papel" || inputValorHumano == "tesoura") {
        return inputValorHumano
    }
    alert ("Invalido!")
    return null
}

function playGame() {
    let humanScore = 0
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == humanChoice) {
            return "Empate!"

        } else if (
            (computerChoice == "pedra" && humanChoice == "papel") ||
            (computerChoice == "papel" && humanChoice == "tesoura") ||
            (computerChoice == "tesoura" && humanChoice == "pedra")
        ) {
            humanScore++
            return "Humano vence essa rodada!"

        } else {
            computerScore++
            return "Computador vence essa rodada!"

        }
    }

    for (let i = 1; i <= 5; i++) {
        let humano = getHumanChoice()

        if (humano === null) {
            i--
            continue
        }

        let computador = getComputerChoice()
        let result = playRound(humano, computador)

        alert(
            "Rodada " + i + "\n" +
            "Computador: " + computador + "\n" +
            "Você: " + humano + "\n" +
            result
        )
    }

    if (computerScore > humanScore) {
        alert("Computador venceu! \n" + "Computador | " + computerScore + " X " + humanScore + " | Pessoa")
    } else if (humanScore > computerScore) {
        alert("Pessoa venceu! \n" + "Pessoa | " + humanScore + " X " + computerScore + " | Computador")
    } else {
        alert("Empate!")
    }

}

playGame()