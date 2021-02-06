function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function battleResult(playerResult, computerResult){
	computer = document.getElementById('computer-result')
	player = document.getElementById('player-result')
	computer.innerHTML = 'Computer result: ' + computerResult;
	player.innerHTML = 'Player result: ' + playerResult;
}