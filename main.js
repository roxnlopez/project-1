    console.log( "ready!" );
//get start button to start game


//players and gameboard
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;
	this.finish = finish;

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
	console.log('hi');
function Play() {
	var field = $('.gameboard')[0];
	var player1 = new Player('#r1', 1000);
	var player2 = new Player('#r2', 1000);

	//set listener
//	this.start = function() {
//		player1.prepare();
//		player2.prepare();
//		setListener();
	}


	//create the listener and apply keys
	//var setListener = function() {
	//set keys so players can move around field
		$(document).keydown(function(event) {
			//38 is up
			if (event.which == 38) {
				$('#r1').stop(true).animate({"top": "-=10px"});
			//37 is left	
			} else if (event.which == 37) {
				$('#r1').stop(true).animate({"left": "-=10px"});
			//39 is right	
			} else if (event.which == 39) {
				$('#r1').stop(true).animate({"left": "+=10px"});
			} 

			//z is 90 is left
			if (event.which == 90 ) {
				$('#r2').stop(true).animate({left: "-=10"});
				//$('#r2').animate({marginLeft: "-=10"});
			// 88 is x is up	
			} else if (event.which == 88){
				$('#r2').stop(true).animate({top: "-=10"});
			//67 is c is right	
			} else if (event.which == 67){
				$('#r2').stop(true).animate({left: "+=10"});
			}
	
			//winner declared based on reaching finish line
			if (parseInt($('#r1').css("top")) >= parseInt($('#gameboard').css("top"))) {
					gameOver(player1);
		      } else if (parseInt($('#r2').css("top")) >= parseInt($('#gameboard').css("top"))) {
		       		gameOver(player2);
		      }
		     
		//});   
//}
	console.log('sunday');

	var gameOver = function(winner) {
		if(racer > finish) {
	  	winner = racer;  
		} 


	if (confirm("Game Over!" + winner + " wins! Play again.")) {
		player1.css(".finish", "50px");
		player2.css(".finish", "50px");
	}
	};
});
	console.log("Roxann");
