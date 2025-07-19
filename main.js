const computer = document.querySelector('#comp-choice')
const humanScoreNum  = document.querySelector('#human-score-num');
const computerScoreNum = document.querySelector('#computer-score-num');
const resultItem = document.querySelector('.results-item');
//selected body element 
let body = document.querySelector('body')

//function that randomly generate rock, paper or scissor
//---> math.random() will generate a number 
//---> based on that number we will return rock, paper or scissor
// math.random() generate no. from 0 to 1 
// we'll multiply it with 3, this will give random no. from 0 to 2 
// condition if, else..if, else to return rock, paper, scissors
function getComputerChoice(){
    let random_num=parseInt(Math.floor((Math.random()*3)));
    if(random_num===0){
        computer.textContent = `✊`
        return "rock";
    }
    else if(random_num===1){
        computer.textContent = `✋`
        return "paper";
    }
    else{
        computer.textContent = `✌️`
        return "scissors";
    }
}

//declaration and intitialization of scores
let humanScore=0;
let computerScore=0;

// takes the human and computer player choices as arguments
// plays a single round, increments the round winner’s score 
// and logs a winner announcement
function playRound(humanChoice,computerChoice){
    //converts humanChoice to lower case
    if(!humanChoice || !computerChoice){
        resultShow('* Please Select Your Option *')
        resultItem.style.color = '#ffffff'
        computer.textContent='💻'
        return
    }
    humanChoice=humanChoice.toLowerCase();
    //if both arguments are equal than tie
    if(humanChoice==computerChoice){
        resultShow(`Uh-oh! Stalemate!!! Both called ${humanChoice}`);
        resultItem.style.color = '#ffffff'
        return
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            resultShow(`U lost boy!!! Paper ENVELOPS rock!!!`);
            resultItem.style.color ='rgb(202, 4, 4)';
            computerScore++;
        }
        else{
            resultShow(`U won!!! Rock DEMOLISHES scissors!!! Kachow!!!!`);
            resultItem.style.color = ' rgb(4, 216, 4)'
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            resultShow(`U won!!! Paper ENVELOPS rock!!! Kachow!!!!`);
            resultItem.style.color = ' rgb(4, 216, 4)'
            humanScore++;
        }
        else{
            resultShow(`U lost boy!!! Scissors BUTCHER paper!!!`);
            resultItem.style.color ='rgb(202, 4, 4)';
            computerScore++;
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            resultShow(`U lost boy!!! Rock DEMOLISHES scissors!!!`);
            resultItem.style.color ='rgb(202, 4, 4)';
            computerScore++;
        }
        else{
            resultShow(`U won!!! Scissors BUTCHER paper!!! Kachow!!!!`);
            resultItem.style.color = ' rgb(4, 216, 4)'
            humanScore++;
        }
    }
}

//variables to store return value of functions -  
//getHumanChoice() and getComputerChoice()
let humanChoice 
let computerChoice

let rock=document.querySelector('#rock')
rock.addEventListener('click',()=>{
    humanChoice = 'rock'
})
let paper=document.querySelector('#paper')
paper.addEventListener('click',()=>{
    humanChoice = 'paper'
})
let scissors=document.querySelector('#scissors')
scissors.addEventListener('click',()=>{
    humanChoice = 'scissors'
})

const playButton = document.querySelector('#play-button')
playButton.addEventListener('click',()=>{
    humanScoreNum.textContent = `${humanScore}`
    computerScoreNum.textContent = `${computerScore}`
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
    humanChoice=undefined
    computerChoice=undefined
if(humanScore<5 && computerScore<5){
    humanScoreNum.textContent = `${humanScore}`
    computerScoreNum.textContent = `${computerScore}`
} else if (humanScore===5 || computerScore===5){
    humanScoreNum.textContent = `${humanScore}`
    computerScoreNum.textContent = `${computerScore}`
    result();
    humanScore = 0
    computerScore = 0
    computer.textContent = '💻'
}
})

function result(){
    if(humanScore>computerScore){

        resultShow(`You Won! by ${humanScore-computerScore} points`);
    }
    else if(computerScore>humanScore){
        resultShow(`You lost! by ${computerScore-humanScore} points`);
    }
}

//print result on screen
function resultShow(message){
    resultItem.textContent = `${message}`;
}