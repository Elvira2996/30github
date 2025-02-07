let score = JSON.parse(localStorage.getItem('score')) || {
    
  wins: 0,
  losses: 0,
  ties: 0
};

updateScroreElement();

function playGame (playerMove) {
const computerMove = pickComputerMove();

let result = '';
if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose';
score.losses += 1;
} else if (computerMove === 'paper') {
result = 'You win';
score.wins += 1;
}else if(computerMove === 'scisors') {
result = 'Tie';
score.ties += 1;
}

}else if(playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You win';
score.wins += 1;
} else if (computerMove === 'paper'){
result = 'Tie';
score.ties += 1;
} else if(computerMove === 'scisors'){
result = 'You lose';
score.losses += 1;
}

}else if(playerMove === 'rock') {
if (computerMove === 'rock') {
result = 'Tie';
score.ties += 1;
} else if (computerMove === 'paper') {
result = 'You lose';
score.losses += 1;
}else if(computerMove === 'scisors') {
result = 'You win';
score.wins += 1;
}
}

localStorage.setItem('score', JSON.stringify(score));


updateScroreElement();

document.querySelector('.js-result')
.innerHTML = result;


document.querySelector('.js-moves')
.innerHTML = ` You
<img src="images/${playerMove}.png" class="move-icon" alt="">
<img src="images/${computerMove}.png" class="move-icon" alt="">
Computer`;


}

function updateScroreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


console.log(pickComputerMove());

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove ='';


if (randomNumber >= 0 && randomNumber <1/3){
computerMove = ('rock') ;
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = ('paper');
} else if(randomNumber >= 2/3 && randomNumber < 1){

computerMove = ('scisors');
}
return computerMove;
}