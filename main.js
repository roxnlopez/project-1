console.log("up and running!");

function Player(name){
	this.name = name;
}


function Game() {
	var field = document.querySelector(".gameboard");
	var player1 = new Player(document.querySelector("r1"), "10%");
	var player2 = new Player(document.querySelector("r2"), "10%");
	console.log(field);
	console.log(player1);
	console.log(player2);

	this.start = function() {
		player1.prepare();
		player2.prepare();
		setListener();
	};
}
Game();


function startGame() {
	alert("GO!");
}
var myTimer = setTimeout(startGame, 3000);