playerScore = document.getElementById('session-p1-cell')
compScore = document.getElementById('session-cp-cell')
playerRoundScore = document.getElementById('p1-cell')
compRoundScore = document.getElementById('cp-cell')
weaponImages = document.querySelectorAll('.weapon-images img')
computerWeaponImages = document.querySelectorAll('.computer-weapon-images img')
playerChoiceText = document.querySelector('.player-container span')
computerChoiceText = document.querySelector('.computer-container span')
displayResult = document.getElementById('show-result')
nextBattle = document.getElementById('play-again')
nextRound = document.getElementById('play-another-round')
 ROCK = document.getElementById('ROCK')
 PAPER = document.getElementById('PAPER')
 SCISSORS = document.getElementById('SCISSORS')

let playerPoints = 0;
let playerRoundPoints = 0;
let compPoints = 0;
let compRoundPoints = 0;
let playerChoice = "";
let compChoice = "";

const availableWeapons = ['ROCK', 'PAPER', 'SCISSORS'];

/*function setGame() {
    playerScore.innerHTML = playerPoints
    compScore.innerHTML = compPoints
}





startGame = () => {
    playerPick();
    compPick();
    

}*/

function playerPick(event) {
    weaponImages.forEach((img) => 
    img.classList.remove('active'));
    weaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    playerChoice = event.target.dataset.option;
    playerChoiceText.textContent = `Player chooses ${playerChoice}`
    console.log(playerChoice);
    weaponImages.forEach((img) => 
    img.classList.add('inactive'));
    event.target.classList.remove('inactive');
    event.target.classList.add('active');
    
}

function compPick() {
    computerWeaponImages.forEach((img) => 
    img.classList.remove('active'));
    computerWeaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    randomIndex = Math.floor(Math.random() * availableWeapons.length);
    compChoice = availableWeapons[randomIndex];
    console.log(compChoice);
    computerChoiceText.textContent =`Computer chooses ${compChoice}`
    computerWeaponImages.forEach((img) => 
    img.classList.add('inactive'));
    if (compChoice === 'ROCK') {

    ROCK.classList.remove('inactive')
    ROCK.classList.add('active')

    } else if (compChoice === 'PAPER') {

    PAPER.classList.remove('inactive')
    PAPER.classList.add('active')

    } else  {

    SCISSORS.classList.remove('inactive')
    SCISSORS.classList.add('active')

    }

    checkResult();
}

function checkResult () {
    let result = "";

    if (playerChoice === compChoice) {
        result = 'Its a tie!';
        
    } else if ( (playerChoice === 'ROCK' && compChoice === 'PAPER') ||
    (playerChoice === 'PAPER' && compChoice === 'SCISSORS') ||
    (playerChoice === 'SCISSORS' && compChoice === 'ROCK') ) {
        result = 'Computer Won!';
        compPoints++;
        compScore.innerHTML = compPoints;
        console.log(compPoints)
    } else {
        result = 'You Won!';
        playerPoints++;
        playerScore.innerHTML = playerPoints
        console.log(playerPoints)
    }
    displayResult.textContent = result;

    showPlayAgain();
    roundWinner();
}

function showPlayAgain() {
    nextBattle.classList.add('active');
}

function anotherBattle() {
    weaponImages.forEach((img) => 
    img.classList.remove('active'));
    weaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    computerWeaponImages.forEach((img) => 
    img.classList.remove('active'));
    computerWeaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    nextBattle.classList.remove('active');
    playerChoiceText.textContent = 'Player One Chooses...';
    computerChoiceText.textContent = 'Computer Chooses...';
    displayResult.textContent = "";

}



function roundWinner() {
    if (playerPoints === 5) {
        playerRoundPoints++
        playerRoundScore.textContent = playerRoundPoints
        nextBattle.classList.remove('active')
        nextRound.classList.add('active')
       
    } if (compPoints === 5) {
        compRoundPoints++
        compRoundScore.textContent = compRoundPoints
        nextBattle.classList.remove('active')
        nextRound.classList.add('active')
        
    }

   
}
function anotherRound() {
    playerPoints = 0;
    playerScore.innerHTML = playerPoints
    compPoints = 0;
    compScore.innerHTML = compPoints
    weaponImages.forEach((img) => 
    img.classList.remove('active'));
    weaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    computerWeaponImages.forEach((img) => 
    img.classList.remove('active'));
    computerWeaponImages.forEach((img) => 
    img.classList.remove('inactive'));
    nextRound.classList.remove('active');
    playerChoiceText.textContent = 'Player One Chooses...';
    computerChoiceText.textContent = 'Computer Chooses...';
    displayResult.textContent = "";
}

weaponImages.forEach((img) =>
img.addEventListener('click', playerPick)
);

weaponImages.forEach((img) =>
img.addEventListener('click', compPick)
);

nextBattle.addEventListener('click', anotherBattle);

nextRound.addEventListener('click', anotherRound);