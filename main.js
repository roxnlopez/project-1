console.log( "ready!" );
//players and gameboard
function Game(playerOne, playerTwo) { //set beginning variables
	setInterval(moveRacer, 10);
	this.moveRacer = moveRacer;
	this.playerOne = new Player(playerOne);
	this.playerTwo = new Player(playerTwo);
	this.gameboard = gameboard;
	this.roundScore = 0;
	this.activePlayer = this.playerOne;
	var game = newGame();
	var restart_btn = restart_btn;
}

function Player(playerName, score) { 
	this.playerName = playerName;
	this.score = 0;
}

Game.prototype.endRound = function() { //set end of round function
	if(this.activePlayer === this.playerOne) {
		this.playerOne.score += this.roundScore;
		if(this.playerOne.score >= 100) {
			return playerOne.playerName + " wins the race!";
		} else {
			this.activePlayer = this.playerTwo;
		} else {
			this.playerTwo.score += this.roundScore;
			if(this.playerTwo.score >= 100) {
				return playerTwo.playerName + " wins the race!";
			} else {
				this.activePlayer = this.playerOne;
			}
		}
		this.roundScore = 0;
	}
};

// Game.prototype.playRound = function() { //build play function
// 	var
// }

$function() {
	$("form#player-form").submit(function(event) {
		event.preventDefault();
		var playerOneName = $("input#player-one-name").val();
		var playerTwoName = $("input#player-two-name").val();
		var newGame = new Game(playerOneName, playerTwoName);

		//start a new game
		$('#racer1').fadeOut(750);
		$('#new-game').fadeOut(750);
		$('#live-game').delay(750).fadeIn(1000);
		$('#player-one-name').val(" ");
		$('#player-two-name').val(" ");
		$('#live-game h2').text(newGame.activePlayer.playerName + "'s turn.");

		//player one setup
	})
}
// $('.start').click(function () {
// 	var counter = 10;
// 	var interval = setInterval(function() {
// 		counter--;
// 		if (counter >= 0) {
// 			span = $('#timer');
// 			span.html(counter);
// 			$('.start').attr('disabled', 'disabled');
// 		}
// 		if (counter === 0) {
// 			clearInterval(interval);
// 			return $('.gameboard').toggleClass("gameboard"), 
//                    $("#win").css('display', 'block'), 
//                    $(".start").css('display', 'none'), 
//                    $("#reload").css('display', 'block'),
//                    $("startGame").removeAttr("disabled", "disabled"),
//                    $("#tally").append(score + "!"),
//                     resetScore2();
//             }
//     }, 1000);
// });
// console.log(setInterval);
console.log(Player);
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

	console.log(parseInt($('#r1').css("top")));
	console.log(parseInt($('#finish').css("top")));
		if (parseInt($('#r1').css("top")) < parseInt($('#finish').css("top"))) {
			alert("Player1 wins the race!");		
			location.reload();
			window.location.reload(false);
	//gameOver(player1);
	    } else if (parseInt($('#r2').css("top")) < parseInt($('#finish').css("top"))) {
	      	alert("Player2 wins the race!");
	      	location.reload();
			window.location.reload(false);
	//gameOver(player2)
		}

	// //set game rounds
	// if ('.winner' == parseInt($('#finish').css("top"))) {
	// 	location.reload();
	// } else {
	// 	console.log("Try again.");
	// }

	// //game timer to run 60 seconds  
	// var timerVar = setInterval(countTimer, 1000);
	//    var totalSeconds = 0;
 //    function countTimer() {
 //      ++totalSeconds;
 //      var hour = Math.floor(totalSeconds /3600);
 //      var minute = Math.floor((totalSeconds - hour*3600)/60);
 //      var seconds = totalSeconds - (hour*3600 + minute*60);	  
	//   document.getElementById("timer").innerHTML = "Timer: " + seconds;
 //    }

});
	console.log("Roxann");
