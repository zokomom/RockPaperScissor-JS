console.log("Hello World!");


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
// console.log(getComputerChoice());

// takes input from user
function getHumanChoice(){
    let user_choice=prompt("Enter Rock, Paper or Scissors : ");
    return user_choice;
}


//declaration and intitialization of scores
let humanScore=0;
let computerScore=0;

// takes the human and computer player choices as arguments
// plays a single round, increments the round winner’s score 
// and logs a winner announcemen
function playRound(humanChoice,computerChoice){
    //converts humanChoice to lower case
    humanChoice=humanChoice.toLowerCase();
    //if both arguments are equal
    if(humanChoice==computerChoice){
        console.log(`No Point! Both called ${humanChoice}`);
        return
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            console.log(`You lose! Paper beats ${humanChoice}`);
            computerScore++;
        }
        else{
            console.log(`You won! Rock beats ${computerChoice}`);
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            console.log(`You won! Paper beats ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`You lose! Scissor beats ${humanChoice}`);
            computerScore++;
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            console.log(`You lose! Rock beats ${humanChoice}`);
            computerScore++;
        }
        else{
            console.log(`You won! Scissors beats ${computerChoice}`);
            humanScore++;
        }
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Computer : ${computerScore}`);
        console.log(`You : ${humanScore}`);
        console.log("<------------------------------>")
    }
    if(humanScore>computerScore){
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log(`You Win! by ${humanScore-computerScore} points`);
    }
    else if(computerScore>humanScore){
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log(`You lost! by ${computerScore-humanScore} points`);
    }
    else{
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log(`Draw! your points : ${humanScore} Computer points : ${computerScore}`);
    }
}
playGame();





