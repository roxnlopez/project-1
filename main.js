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
		console.log('hi');
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
	console.log('hi');
		$(document).keydown(function(event) {
			//38 is up
			if (event.keyCode == 38) {
				$('#r1').animate({top: "-=10"});
			//37 is left	
			} else if (event.keyCode == 37) {
				$('#r1').animate({left: "-=10"});
			//39 is right	
			} else if (event.keyCode == 39) {
				$('#r1').animate({left: "+=10"});
			} 
console.log();
			if (event.which == 90 ) {
				key_left = true;
				//$('#r2').animate({marginLeft: "-=10"});
			} else if (event.which == 88){
				key_up = true;
			} else if (event.which == 67){
				key_right = true;
			}
		
			//winner declared based on reaching finish line
			if (parseInt($('#r1').css("top")) >= parseInt($('#gameboard').css("top"))) {
					gameOver(player1);
		      } else if (parseInt($('#r2').css("top")) >= parseInt($('#gameboard').css("top"))) {
		        	gameOver(player2);
		      }
		      console.log('hi');
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