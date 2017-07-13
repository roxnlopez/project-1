console.log("up and running!");

//players and gameboard
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;

	this.prepare = function() {
		$(this.racer).css("gameboard", this.gameboard);
	};

	this.move = function() {
		$(this.racer).css("start", "+=10%");
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

	//create the listener and apply keys
	var setListener = function() {
		$(document).keyup(function(event) {
			if (event.which == 38 && event.which == 37 && event.which == 39) {
				player1.move();
			} else if (event.which == 90 && event.which == 88 && event.which == 67) {
				player2.move();
			}
			//winner declared based on reaching finish line
			if (parseInt(player1.racer).css("finish") >= parseInt(gameboard).css("height")) {
					gameOver(player1);
		      } else if (parseInt(player2.racer).css("finish") >= parseInt(gameboard).css("height")) {
		        	gameOver(player2);
		      }
		});   
	};
}

var Home = function(winner) {
	if (confirm("Game Over!" + winner + " wins! Play again.")) {
		player1.css("finish", "0%");
		player2.css("finish", "0%");
	}
};