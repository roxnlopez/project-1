console.log("up and running!");

//players and gameboard
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;

	this.prepare = function() {
		$(this.racer).css(".gameboard", this.gameboard);
	};

	this.move = function() {
		let actualNumber = parseInt($(this.racer).css("top"));
		actualNumber -= 10;
		$(this.racer).css("top", actualNumber);
	};
}

//set up a game function with the players and the field
function Play() {
	var field = $('.gameboard')[0];
	var player1 = new Player('#r1', "10%");
	var player2 = new Player('#r2', "10%");

	//set listener
	this.start = function() {
		player1.prepare();
		player2.prepare();
		setListener();
	};

	//create the listener and apply keys
	//var setListener = function() {
	//set keys so players can move around field
		$(document).keydown(function(event) {
			if (event.which == 38) {
				key_up = true;
			} else if (event.which == 37) {
				key_left = true;
			} else if (event.which == 39) {
				key_right = true;
			} 
console.log('hi');
			if (event.which == 90 ) {
				$('#r2').animate({marginLeft: "-=10"});
			} else if (event.which == 88){
				$('#r2').animate({marginUp: "-=10"});
			} else if (event.which == 67){
				$('#r2').animate({marginRight: "-=10"});
			}
		
			//winner declared based on reaching finish line
			if (parseInt($('#r1').css("top")) >= parseInt($('#gameboard').css("top"))) {
					gameOver(player1);
		      } else if (parseInt($('#r2').css("top")) >= parseInt($('#gameboard').css("top"))) {
		        	gameOver(player2);
		      }
		});   
}

var gameOver = function(winner) {
	console.log('hi');
	if (confirm("Game Over!" + winner + " wins! Play again.")) {
		player1.css("finish", "0%");
		player2.css("finish", "0%");
	}
};

Play();