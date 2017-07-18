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
	console.log('hi');
//function Play() {
//	var field = $('.gameboard')[0];
//	var player1 = new Player('#r1', "10%");
//	var player2 = new Player('#r2', "10%");

	//set listener
//	this.start = function() {
//		player1.prepare();
//		player2.prepare();
//		setListener();
//	};

//everytime i move player, current values, need to know gameboard dimensions 


	//create the listener and apply keys
	//var setListener = function() {
	//set keys so players can move around field
		$(document).keydown(function(event) {
			//38 is up
			if (event.which == 38) {
				$('#r1').stop(true).animate({"top": "-=40px"});
			//37 is left	
			} else if (event.which == 37) {
				$('#r1').stop(true).animate({"left": "-=40px"});
			//39 is right	
			} else if (event.which == 39) {
				$('#r1').stop(true).animate({"left": "+=40px"});
			} 

			//z is 90 is left
			if (event.which == 90 ) {
				$('#r2').stop(true).animate({left: "-=40"});
				//$('#r2').animate({marginLeft: "-=10"});
			// 88 is x is up	
			} else if (event.which == 88){
				$('#r2').stop(true).animate({top: "-=40"});
			//67 is c is right	
			} else if (event.which == 67){
				$('#r2').stop(true).animate({left: "+=40"});
			}
	
			//winner declared based on reaching finish line
			//try less than
			//remember top, left, right(left + wdith of gameboard)
				
		console.log(parseInt($('#r1').css("top")));
		console.log(parseInt($('#finish').css("top")));
				if (parseInt($('#r1').css("top")) < parseInt($('#finish').css("top"))) {
					alert("Player1 wins the race!");
			//now my page reloads		
					window.location.reload(true); 
				//		gameOver(player1);
			      } else if (parseInt($('#r2').css("top")) < parseInt($('#finish').css("top"))) {
			      	alert("Player2 wins the race!");
			      	window.location.reload(true); 
			      // 	gameOver(player2);
			      //}

		      }
		    
		      //if event.which = up then win
			//if(event.which === 38 || event.which === 88 < parseInt($('#finish').css("top"))) {

		//});   
//}
	
//var gameOver = function(winner) {
	//if(current score > highScore)  {  highScore = current score;  }
   //if(person presses space)  {  initialize();  }

//	if (confirm("Game Over!" + winner + " wins! Play again.")) {
//		player1.css("finish", "0%");
//		player2.css("finish", "0%");
//	}
});
	console.log("Roxann");
