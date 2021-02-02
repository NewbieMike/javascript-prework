function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = 'papier';
let computerMove = 'kamień';

printMessage('Zagrałem ' + computerMove + '! Jeżeli Twój ruch to '+
playerMove +', to wygrałeś!')