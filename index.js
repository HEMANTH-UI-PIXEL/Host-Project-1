document.addEventListener('DOMContentLoaded', (event) => {
    const userChoiceValue = document.getElementById('user-choice-value');
    const computerChoiceValue = document.getElementById('computer-choice-value');
    const gameResult = document.getElementById('game-result');
    const choices = document.querySelectorAll('.choice');
    const resetButton = document.getElementById('reset');

    choices.forEach(choice => {
        if (choice.id !== 'reset') { // Ensure we're not targeting the reset button here
            choice.addEventListener('click', () => {
                const userChoice = choice.id;
                userChoiceValue.textContent = userChoice;

                const computerChoice = getComputerChoice();
                computerChoiceValue.textContent = computerChoice;

                const result = determineWinner(userChoice, computerChoice);
                gameResult.textContent = result;
            });
        }
    });

    resetButton.addEventListener('click', resetGame);

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        }

        switch (userChoice) {
            case 'rock':
                if (computerChoice === 'scissors') return 'Rock smashes scissors! You win!';
                else return 'Paper covers rock! You lose!';
            case 'paper':
                if (computerChoice === 'rock') return 'Paper covers rock! You win!';
                else return 'Scissors cuts paper! You lose!';
            case 'scissors':
                if (computerChoice === 'paper') return 'Scissors cuts paper! You win!';
                else return 'Rock smashes scissors! You lose!';
            default:
                return '';
        }
    }

    function resetGame() {
        userChoiceValue.textContent = '';
        computerChoiceValue.textContent = '';
        gameResult.textContent = '';
    }
});