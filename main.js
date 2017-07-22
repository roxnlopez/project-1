    console.log( "ready!" );
//players and gameboard
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;
	this.timerVar = setInterval(countTimer, 1000);
	var totalSeconds = 0;
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
		
	//set keys so players can move around field
		$(document).keydown(function(event) {
			if (event.which == 38) {
				$('#r1').stop(true).animate({"top": "-=80px"});
			} else if (event.which == 37) {
				$('#r1').stop(true).animate({"left": "-=80px"});
			} else if (event.which == 39) {
				$('#r1').stop(true).animate({"left": "+=80px"});
			} 

			if (event.which == 90 ) {
				$('#r2').stop(true).animate({left: "-=80"});
			} else if (event.which == 88){
				$('#r2').stop(true).animate({top: "-=80"});
			} else if (event.which == 67){
				$('#r2').stop(true).animate({left: "+=80"});
			}
	$(function () {
	var game = new Game();
	var $moves = $('.game-moves');

	$('body').on('click', '.new-round', function () {
		game.newRound();
	});

	game.on('move', function (e) {
		$moves.text(e.moves.length);
	});

	game.on('newRound gameOver', function () {
		$moves.empty();
	});

	game.newRound();
});
				
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

		    //game timer   
		var timerVar = setInterval(countTimer, 1000);
	    var totalSeconds = 0;
	    function countTimer() {
	      ++totalSeconds;
	      var hour = Math.floor(totalSeconds /3600);
	      var minute = Math.floor((totalSeconds - hour*3600)/60);
	      var seconds = totalSeconds - (hour*3600 + minute*60);
	  
	     document.getElementById("timer").innerHTML = "Timer: " + seconds;
    }
	
});
	console.log("Roxann");
