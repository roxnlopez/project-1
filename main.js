console.log( "ready!" );
//players scores
var score1 = 0;
var score2 = 0;
var round = 1;


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
	var timer = 10;
	//creat timer
    var myint = setInterval(function(){ 
        //timer going down by one
    	timer--;
        //changing innerHTML to timer
        document.getElementById("demo").innerHTML = timer;
    	//if timer equals 0, clear Interval
        if (timer <= 0) {
        	clearInterval(myint);
		}	
    }, 1000);
    //players start
    //set keys so players can move around field
    function keydownFunction(event){
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
		if (parseInt($('#r1').css("top")) <= 55) {
			//end timer
			document.removeEventListener("keydown", keydownFunction);
			$('#r1').css("top", "80%");
			$('#r2').stop(true);
			$('#r1').css("left", "35%");
			$('#r2').css("top", "80%");
			$('#r1').stop(true);
			$('#r2').css("left", "60%");
	   		//need a var to keep track of how many times player won game
	   		score1++;
   			document.getElementById("score1").innerHTML = score1;
   			//create function to signify round has ended
   			round++;
   			//if round is 4 game over...see who has more points (score 1 and score 2)
   			clearInterval(myint);
   			// myFunction();
		} 
		else if (parseInt($('#r2').css("top")) <= 55) {
			//end timer
			document.getElementById("finish").removeEventListener("keydown", keydownFunction);
			$('#r1').css("top", "80%");
			$('#r2').stop(true);
			$('#r1').css("left", "35%");
			$('#r2').stop(true);
			$('#r2').css("top", "80%");
			$('#r2').css("left", "60%");
	   		//need a var to keep track of how many times player won game
	   		score2++;
	   		document.getElementById("score2").innerHTML = score2;
	   		//create function to signify round has ended
	   		round++;
	   		clearInterval(myint);
	   		// myFunction();
		}
	}

	document.addEventListener("keydown", keydownFunction);
}
