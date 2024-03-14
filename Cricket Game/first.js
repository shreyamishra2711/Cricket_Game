let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
     score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
score.displayScore = function() {
    return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
};
showResult();
} 
let computerChoice;
function generateComputerChoice() {
     //This will generate random number between 0 and 3
     let randomNumber = Math.random() * 3;
    
     if(randomNumber > 0 && randomNumber <= 1){
         return 'Bat';
        // console.log('computer choice is Bat');
     } else if(randomNumber > 1 && randomNumber <= 2){
         return 'Ball';
        // console.log('computer choice is Ball');
     } else{
        return 'Stump';
         //console.log('computer choice is Stump');
     }
}
function getResult(userMove, computerMove) {
if(userMove === 'Bat') {
    if(computerMove === 'Ball'){
        //score.win = score.win + 1;
        score.win++;
        return 'user won.';
    } else if(computerMove === 'Bat'){
        score.tie++;
return `It's a tie`;
    } else if(computerMove === 'Stump'){
        score.lost++;
        return 'computer has won';
    }
} else if(userMove === 'Ball') {
    if(computerMove === 'Ball'){
        score.tie++;
        return `It's a tie`;
    }else if(computerMove === 'Bat'){
        score.lost++;
    return 'computer has won';
    }else if(computerMove === 'Stump'){
        score.win++;
        return 'user won.';
    }
} else{
    if(computerMove === 'Ball'){
        score.lost++;
        return 'computer has won';
    }else if(computerMove === 'Bat'){
        score.win++;
    return 'user won.';
    }else if(computerMove === 'Stump'){
        score.tie++;
        return `It's a tie`;
    }
}
}
function showResult(userMove, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));
document.querySelector('#user-move').innerText = userMove !== undefined ? `You have chosen ${userMove}`: '';


document.querySelector('#computer-move').innerText = computerMove !== undefined ? `Computer choice is ${computerMove}`: '';


document.querySelector('#result').innerText = result || '';



document.querySelector('#score').innerText = score.displayScore()
}







