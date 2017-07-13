console.log("up and running!");

//players and gameboard
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;

	this.prepare = function() {
		$(this.racer).css("gameboard", this.gameboard);
	};

	this.move = function() {
		$(this.racer).css("margin-left", "+=10%");
	};
}

//set up a game function with the players and the field
function Play() {
	var field = $('.gameboard');
	var player1 = new Player($('.r1'), "10%");
	var player2 = new Player($('.r2'), "10%");

	//set listener
	this.start = function() {
		player1.prepare();
		player2.prepare();
		setListener();
	};
}