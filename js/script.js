function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if (argMoveId == 2){
        return 'papier';
    }
    else if (argMoveId == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove =  getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

function displayResult (argComputerMove, argPlayerMove) {
    printMessage('Komputer zagrał '+ argComputerMove + ', a Ty: ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier')
    {printMessage('Ty wygrywasz!');}
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
  {printMessage('Przegrałeś! :(');}
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień')
  {printMessage('Przegrałeś! :(');}
  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){printMessage('Wygrałeś!')}
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
  {printMessage('Niestety, ale przegrałeś');}
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){printMessage('Wygrywasz!');}
  else if (argComputerMove == argPlayerMove){printMessage('Remis!');}
  else if (argPlayerMove == 'nieznany ruch'){printMessage('Ups, coś poszło nie tak. Spróbój ponownie wpisując tylko cyfry od 1 do 3')}
}

let finalResult = displayResult (computerMove, playerMove)
