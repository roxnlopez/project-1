 console.log( "ready!" );
 $(function() {

//set variables like Connie and Lauren
function Player(racer, gameboard) {
	this.racer = racer;
	this.gameboard = gameboard;
	this.mine_1 = $('#mine_1');
	this.mine_2 = $('#mine_2');
	this.mine_2 = $('#mine_3');
	this.replay_div = $('#replay_div');
	this.replay_btn = $('#replay');
	this.score = $('#score');	

	var container_left = parseInt(conatiner.css('left'));
	var container_width = parseInt(conatiner.width);
	var container_height = parseInt(conatiner.height);
	var racer_width = parseInt(racer.width);
	var racer_height = parseInt(racer.height);

	var game_over = false;

	var score_counter = 1;

	var speed = 2;

	var mine_speed = 5;

	//this.move = function() {
	//	let actualNumber = parseInt($(this.racer).css("top"));
	//	actualNumber -= 10;
	//	$(this.racer).css("top", actualNumber);
	//};
}
 	console.log(Player);

//set up a game function with the players and the field
	console.log('hi');
	//set listener
//	this.start = function() {
//		player1.prepare();
//		player2.prepare();
//		setListener();
	}


	//create the listener and apply keys
	//var setListener = function() {
	//set keys so players can move around field
		$(document).on ('keydown', function(event) {
			if (game_over === false) {
				var key = e.keyCode;
					//38 is up
					if (key === 38 && move_up === false) {
						move_up = requestAnimationFrame(up);
						//$('#r1').stop(true).animate({"top": "-=10px"});
					//37 is left	
					} else if (key === 37 && move_left === false) {
						move_left = requestAnimationFrame(left);
						//$('#r1').stop(true).animate({"left": "-=10px"});
					//39 is right	
					} else if (key === 39 && move_right === false) {
						move_right = requestAnimationFrame(right);
						//$('#r1').stop(true).animate({"left": "+=10px"});
					} 

					//z is 90 is left
					if (key === 90 && move_left === false ) {
						move_left = requestAnimationFrame(left);
						//$('#r2').stop(true).animate({left: "-=10"});
						//$('#r2').animate({marginLeft: "-=10"});
					// 88 is x is up	
					} else if (key === 88 && move_up === false){
						move_up = requestAnimationFrame(up);
						//$('#r2').stop(true).animate({top: "-=10"});
					//67 is c is right	
					} else if (key === 67 && move_right === false){
						move_right = requestAnimationFrame(right);
						//$('#r2').stop(true).animate({left: "+=10"});
					}
		}

		$(document).on('keyup', function(e) {
			if(game_over === false) {
				var key = e.keyCode;
					if (key === 37) {
						cancelAnimationFrame(move_left);
						move_left = false;
		            } else if (key === 39) {
		                cancelAnimationFrame(move_right);
		                move_right = false;
		            } else if (key === 38) {
		                cancelAnimationFrame(move_up);
		                move_up = false;
						}

					if (key === 90) {
						cancelAnimationFrame(move_left);
						move_left = false;
		            } else if (key === 67) {
		                cancelAnimationFrame(move_right);
		                move_right = false;
		            } else if (key === 88) {
		                cancelAnimationFrame(move_up);
		                move_up = false;
						}
			}
		});

	function left() {
		if (game_over === false && parseInt(racer.css('left')) > 0) {
			racer.css('left', parseInt(racer.css('left')) -5);
			move_left = requestAnimationFrame(left);
		}
	function right() {
		if (game_over === false && parseInt(racer.css('left')) < container_width - racer_width) {
			racer.css('left', parseInt(racer.css('left')) +5);
			move_right = requestAnimationFrame(right);
		}


		
			//winner declared based on reaching finish line
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
});
