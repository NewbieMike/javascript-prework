let playerResult= 0;
let computerResult= 0;


function playGame(playerInput){
    clearMessages()
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'stone';
        } 
        if(argMoveId == 2){
            return 'paper';
        }
        if(argMoveId == 3){
            return 'scissors';
        }
        else {
        printMessage('Wrong id ' + argMoveId + '.');
        return 'Unknown move';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber)

    let playerMove = getMoveName(playerInput)
    function playerWin(){
        playerResult++;
    }
    function computerWin(){
        computerResult++;
    }
    function draw(){
        playerResult++;
        computerResult++;
    }
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('I played ' + argComputerMove + ', and you played ' + argPlayerMove);
        if ( argComputerMove == argPlayerMove ) {
            draw();
            printMessage('Draw!');
        }
        else if( argComputerMove == 'stone' && argPlayerMove == 'paper'){
            playerWin();
            printMessage('You win!');
        } 
        else if (argComputerMove == 'stone' && argPlayerMove == 'scissors'){
            computerWin();
            printMessage('You lose!');
        }
        else if (argComputerMove == 'paper' && argPlayerMove == 'stone'){
            computerWin();
            printMessage('You lose!');
        }
        else if (argComputerMove == 'scissors' && argPlayerMove == 'paper'){
            computerWin();
            printMessage('You lose!');
        }
        else if (argComputerMove == 'scissors' && argPlayerMove == 'stone'){
            playerWin();
            printMessage('You win!');
        }
        else if (argComputerMove == 'paper' && argPlayerMove == 'scissors'){
            playerWin();
            printMessage('You win!');
        }
        else (argPlayerMove == 'Unknown move')
        battleResult(playerResult, computerResult);
    }
    displayResult(computerMove, playerMove)
    
        console.log("Wynik to" + playerResult + computerResult)
    }


document.getElementById('play-rock').addEventListener('click', function(){playGame(1)})
document.getElementById('play-paper').addEventListener('click', function(){playGame(2)})
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)})