console.log( "ready!" );
//players scores
var score1 = 0;
var score2 = 0;
var round = 1;
var timer = 0;
var myint;
var roundOver = false;
var gameInterval;

function displayWinMessage() {
	if(score1 > score2) {
		alert("Player 1 wins!");
	} else {
		alert("Player 2 wins!");
	}	
	round = 1;
	score1 = 0;
	score2 = 0;
	timer = 0;
	roundOver = false;
	clearInterval(myint);
	clearInterval(gameInterval);
}

//set countdown to initialize when page loads with message displayed
function myFunction() {
	setTimeout(function() {
		newFunction("On Your Marks!");
	}, 1000); 
	setTimeout(function() {
		newFunction("Get Set!");
	}, 2000);
	setTimeout(function() {
		newFunction("GO!");
		beginRound();
	}, 3000);
}

function newFunction(input) {
	document.getElementById("demo").innerHTML = input;
}

function beginRound() {
	document.getElementById("round").innerHTML = round;
	roundOver = false;
	 	clearInterval(myint);
	//creat timer
    myint = setInterval(function(){ 
        //timer going down by one
    	timer++;
        //changing innerHTML to timer
        document.getElementById("demo").innerHTML = timer;	
    }, 1000);
    gameInterval = setInterval(function() {
    	checkForWin();
    }, 50);


    //players start
    //set keys so players can move around field
    function keydownFunction(event){
    	if (roundOver) return;
		if (event.which == 38) {
			$('#r1').stop(true).animate({"top": "-=80px"});
		} else if (event.which == 37) {
			$('#r1').stop(true).animate({"left": "-=80px"});
		} else if (event.which == 39) {
			$('#r1').stop(true).animate({"left": "+=80px"});
		} 
		if (event.which == 90 ) {
			$('#r2').stop(true).animate({"left": "-=80px"});
		} else if (event.which == 88){
			$('#r2').stop(true).animate({"top": "-=80px"});
		} else if (event.which == 67){
			$('#r2').stop(true).animate({"left": "+=80px"});
		}
	}

	function checkForWin(){
		if (roundOver && round === 4) {
			clearInterval(gameInterval);
			displayWinMessage();
		} else {
			if (parseInt($('#r1').css("top")) <= 55) {
			if (roundOver) return;
			//end timer
			$('#r1').css("top", "80%");
			$('#r1').stop(true);
			$('#r1').css("left", "35%");
			$('#r2').css("top", "80%");
			$('#r2').stop(true);
			$('#r2').css("left", "60%");
			console.log("hello");
	   		//need a var to keep track of how many times player won game
	   		score1++;
	   		var round1timer = timer;
	   		timer = 1;
   			document.getElementById("score1").innerHTML = "<span>Player 1 Score: " + score1 + " " + "<span>Timer: (" + round1timer + ")</span>";
   			//create function to signify round has ended
   			round++;
   			console.log(timer);
   			//if round is 4 game over...see who has more points (score 1 and score 2)
   			clearInterval(myint);
   			//myFunction();
   			roundOver = true;
		} 
		else if (parseInt($('#r2').css("top")) <= 55) {
			if (roundOver) return;
			//end timer
			$('#r1').css("top", "80%");
			$('#r1').stop(true);
			$('#r1').css("left", "35%");
			$('#r2').css("top", "80%");
			$('#r2').stop(true);
			$('#r2').css("left", "60%");
	   		//need a var to keep track of how many times player won game
	   		score2++;
	   		var round1timer = timer;
	   		timer = 1;
   			document.getElementById("score2").innerHTML = "<span> Player 2 Score: " + score2 + " " + "<span>Timer: (" + round1timer + ")</span>";
	   		//create function to signify round has ended
	   		round++;
	   		clearInterval(myint);
	   		//myFunction();
	   		roundOver = true;
		}
		}

	}

	document.addEventListener("keydown", keydownFunction);
}


