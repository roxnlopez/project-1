console.log( "ready!" );
//players and gameboard
function Game(playerOne, playerTwo) { //set beginning variables
	setInterval();
	this.moveRacer = moveRacer;
	this.gameboard = gameboard;
	this.roundScore = 0;
	var game = newGame();
}

function Player(playerName, score) { 
	this.playerName = playerName;
	this.score = 0;
}

console.log(Game);
console.log("Roxann");
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
	if (parseInt($('#r1').css("top")) < parseInt($('#finish').css("top"))) {
		alert("Player1 wins the race!");		
//gameOver(player2);
  } else if (parseInt($('#r2').css("top")) < parseInt($('#finish').css("top"))) {
   	alert("Player2 wins the race!");
	}

//game timer to run 60 seconds  
var sec = 0;
function pad ( val ) { return val > 3 ? val : "0" + val; }
setInterval(function(){
    $(".seconds").html(pad(++sec%60));
    $("#minutes").html(pad(parseInt(sec/60,10)));
}, 1000);
var timer = setInterval ( function(){
	console.log("next round");
}, 1000 );
clearInterval ( timer );

	console.log(timer);
});