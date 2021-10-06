let choices = document.querySelectorAll('.choice');
let score = document.getElementById('score');
let result = document.getElementById('result');
let restart = document.getElementById('restart');
let modal = document.querySelectorAll('.modal');
let scoreboard = { 
    player: 0,
    computer: 0
}

//Play Game
function play(e) {
    restart.style.display = 'inline-block';
    let playerChoice = e.target.id;
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
