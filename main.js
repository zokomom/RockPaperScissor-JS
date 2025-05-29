//function that randomly generate rock, paper or scissor
//---> math.random() will generate a number 
//---> based on that number we will return rock, paper or scissor
// math.random() generate no. from 0 to 1 
// we'll multiply it with 3, this will give random no. from 0 to 2 
// condition if, else..if, else to return rock, paper, scissors
function getComputerChoice(){
    let random_num=parseInt(Math.floor((Math.random()*3)));
    if(random_num===0){
        return "rock";
    }
    else if(random_num===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//selected body element and appended a div element as a container
let body = document.querySelector('body')
let allButtons = document.createElement('div')
let resultPara = document.createElement('div')
resultPara.setAttribute('id',resultPara)
allButtons.setAttribute("id",allButtons)
body.appendChild(allButtons)
body.appendChild(resultPara)

//declaration and intitialization of scores
let humanScore=0;
let computerScore=0;

// takes the human and computer player choices as arguments
// plays a single round, increments the round winner’s score 
// and logs a winner announcemen
function playRound(humanChoice,computerChoice){
    //converts humanChoice to lower case
    if(!humanChoice || !computerChoice){
        displayMessage2('*Please Select Your Option*<br>')
        return
    }
    humanChoice=humanChoice.toLowerCase();
    //if both arguments are equal than tie
    if(humanChoice==computerChoice){
        displayMessage2(`No Point! Both called ${humanChoice}<br>`);
        return
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            displayMessage2(`You lose! Paper beats ${humanChoice}<br>`);
            computerScore++;
        }
        else{
            displayMessage2(`You won! Rock beats ${computerChoice}<br>`);
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            displayMessage2(`You won! Paper beats ${computerChoice}<br>`);
            humanScore++;
        }
        else{
            displayMessage2(`You lose! Scissor beats ${humanChoice}<br>`);
            computerScore++;
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            displayMessage2(`You lose! Rock beats ${humanChoice}<br>`);
            computerScore++;
        }
        else{
            displayMessage2(`You won! Scissors beats ${computerChoice}<br>`);
            humanScore++;
        }
    }
}

//variables to store return value of functions -  
//getHumanChoice() and getComputerChoice()
let humanChoice 
let computerChoice

//created a button when pressed takes input from user
let rockButton=document.createElement('button')
rockButton.innerHTML="<span>Rock</span>"
rockButton.addEventListener('click',()=>{
    humanChoice = 'rock'
})
let paperButton=document.createElement('button')
paperButton.innerHTML="<span>Paper</span>"
paperButton.addEventListener('click',()=>{
    humanChoice = 'paper'
})
let scissorsButton=document.createElement('button')
scissorsButton.innerHTML="<span>Scissors</span>"
scissorsButton.addEventListener('click',()=>{
    humanChoice = 'scissors'
})
//created a button when pressed plays the game using play round function 
let playGame=document.createElement('div')
playGame.innerHTML="<button id='playRound'>Play Round</button>"
playGame.addEventListener('click',()=>{
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
    humanChoice=undefined
    computerChoice=undefined
if(humanScore<5 && computerScore<5){
    displayMessage1(`Computer : ${computerScore} You : ${humanScore}`);
} else if (humanScore===5 || computerScore===5){
    displayMessage1(`Computer : ${computerScore} You : ${humanScore}`);
    result();
    humanScore = 0
    computerScore = 0
}
})

    allButtons.appendChild(rockButton)
    allButtons.appendChild(paperButton)
    allButtons.appendChild(scissorsButton)
    allButtons.appendChild(playGame)

function result(){
    if(humanScore>computerScore){
        displayMessage2(`You Won! by ${humanScore-computerScore} points`);
    }
    else if(computerScore>humanScore){
        displayMessage2(`You lost! by ${computerScore-humanScore} points`);
    }
    else{
        displayMessage2(`Draw! your points : ${humanScore} Computer points : ${computerScore}`);
    }
}
const p1 = document.createElement("p");
p1.setAttribute("id",'display1')
resultPara.appendChild(p1)
function displayMessage1(message){
    p1.innerHTML=`${message}`;
}
const p2 = document.createElement("p");
p2.setAttribute("id",'display2')
resultPara.appendChild(p2)
function displayMessage2(message){
    p2.innerHTML=`${message}`;
}
