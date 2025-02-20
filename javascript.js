function getComputerChoice(){

    const num = Math.floor((Math.random()*3)+ 1);
    if(num === 1){
        return "scissor"
    } else if (num === 2) {
        return "paper"
    } else {
        return "rock"
    };
} 
// This will select a random number from one to three, with each number being assigned to "scissor", "paper" or "rock" respectively.

function getHumanChoice() {

    let result =prompt("Scissor, Paper or Rock");
    if(result.toLowerCase() === "scissor") {
        return "scissor"
    } else if(result.toLowerCase() === "paper") {
        return "paper"
    } else {
        return "rock"
    };
    
}
// When you launch the "game" via web browser, you have to type either "rock", "paper" or "scissors".


let humanScore = 0;
let computerScore = 0;
// The game sets the scores to zero.

function playRound(humanChoice,computerChoice){
    if(humanChoice === "scissor" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissor!")
        console.log(`You have ${humanScore}. The computer has ${computerScore += 1}.`)
    } else if(humanChoice === "paper" && computerChoice === "scissor" ){
        console.log("You lose! Scissor beats paper!")
        console.log(`You have ${humanScore}. The computer has ${computerScore += 1}.`)
    } else if(humanChoice ==="rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock!")
        console.log(`You have ${humanScore}. The computer has ${computerScore += 1}.`)
    } else if(humanChoice === computerChoice) {
        console.log("How unfortunate... It's a draw! Nobody wins!")
        console.log(`You have ${humanScore}. The computer has ${computerScore}.`)
    } else{
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}!`)
        console.log(`You have ${humanScore += 1}. The computer has ${computerScore}.`)
    }
    
}
// The conditions that'll determine the rounds the game will last.

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
// You and your computer's choices get thrown into the code conditions listed above.

function playGame(){ // The game begins.

    for(let i=1;i<6;i++) {
        playRound(getHumanChoice(),getComputerChoice());
        
    } // How the game lasts...
    if(humanScore > computerScore){
        console.log(`You win the overall game! The final score is ${humanScore} to ${computerScore}.`)
    } else if (humanScore === computerScore) {
        console.log(`The overall game is a draw! The final score is ${humanScore} to ${computerScore}.`)
    } else {
        console.log(`You lose the overall game! The final score is ${humanScore} to ${computerScore}.`)
    }
} // How the game ends with the final scores.

playGame();