let yourScore = 0;
let compScore = 0;
let possibleOutcomes = ['rock','paper','scissor'];
let compOutcome = possibleOutcomes[Math.floor(Math.random()*3)];
let result = document.querySelector("#result h2");

document.querySelector("#rock").addEventListener("click",()=>{
    if(compOutcome === "rock"){
        result.innerText = "It was a draw!";
        draw();
    }
    else if(compOutcome === "paper"){
        result.innerText = "You lost!paper beats rock";
        lost();
    }
    else{
        result.innerText = "You won!rock beats scissor";
        won();
    }
    compOutcome = possibleOutcomes[Math.floor(Math.random()*3)];
});

document.querySelector("#paper").addEventListener("click",()=>{
    if(compOutcome === "rock"){
        result.innerText = "You won!paper beats rock";
        won();
    }
    else if(compOutcome === "paper"){
        result.innerText = "It was a draw!";
        draw();
    }
    else{
        result.innerText = "You lost!scissor beats paper";
        lost();
    }
    compOutcome = possibleOutcomes[Math.floor(Math.random()*3)];
});

document.querySelector("#scissor").addEventListener("click",()=>{
    if(compOutcome === "rock"){
        result.innerText = "You lost!rock beats scissor";
        lost();
    }
    else if(compOutcome === "paper"){
        result.innerText = "You won!scissor beats paper";
        won();
    }
    else{
        result.innerText = "It was a draw!";
        draw();
    }
    compOutcome = possibleOutcomes[Math.floor(Math.random()*3)];
});

const won = ()=>{
    yourScore++;
    document.querySelector("#score #you h2").innerText = yourScore;
    document.querySelector("#result").style.backgroundColor = "green";
    document.querySelector("#result").style.width = "30%"
}

const lost = ()=>{
    compScore++;
    document.querySelector("#score #comp h2").innerText = compScore;
    document.querySelector("#result").style.backgroundColor = "red";
    document.querySelector("#result").style.width = "30%"
}

const draw = ()=>{
    document.querySelector("#result").style.backgroundColor = "black";
    document.querySelector("#result").style.width = "30%"
}