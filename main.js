
    console.log( "ready!" );
//get start button to start game


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
 	console.log(Player);

//set up a game function with the players and the field
function Play() {
	var field = $('.gameboard')[0];
	var player1 = new Player('#r1', "10%");
	var player2 = new Player('#r2', "10%");

	//set listener
	//this.start = function() {
	//	player1.prepare();
	//	player2.prepare();
	//	setListener();
	//};


	//create the listener and apply keys
	//var setListener = function() {
	//set keys so players can move around field
	console.log('hi');
		$(document).keydown(function(event) {
			//38 is up
			if (event.which == 38) {
				$('#r1').animate({top: "-=10"});
			//37 is left	
			} else if (event.which == 37) {
				$('#r1').animate({left: "-=10"});
			//39 is right	
			} else if (event.which == 39) {
				$('#r1').animate({left: "+=10"});
			} 

			//z is 90 is left
			if (event.which == 90 ) {
				$('#r2').animate({left: "-=10"});
				//$('#r2').animate({marginLeft: "-=10"});
			// 88 is x is up	
			} else if (event.which == 88){
				$('#r2').animate({top: "-=10"});
			//67 is c is right	
			} else if (event.which == 67){
				$('#r2').animate({left: "+=10"});
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
	//if(current score > highScore)  {  highScore = current score;  }
   //if(person presses space)  {  initialize();  }

	if (confirm("Game Over!" + winner + " wins! Play again.")) {
		player1.css("finish", "0%");
		player2.css("finish", "0%");
	}
};

