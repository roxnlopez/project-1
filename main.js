console.log( "ready!" );
//players scores
var score1 = 0;
var score2 = 0;
var round = 1;
var winner1 = "Player 1 wins this round!";
var winner2 = "Player 2 wins this round!";


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
        if (timer === 0) {
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
			$('#r2').stop(true).animate({left: "-=80"});
		} else if (event.which == 88){
			$('#r2').stop(true).animate({top: "-=80"});
		} else if (event.which == 67){
			$('#r2').stop(true).animate({left: "+=80"});
		}
		if (parseInt($('#r1').css("top")) < parseInt($('#finish').css("top"))) {
			console.log();
			document.removeEventListener("keydown", keydownFunction);
			// alert("Player1 wins the race!");
			//end timer
	   		//need a var to keep track of how many times player won game
	   		score1++;
   			document.getElementById("score1").innerHTML = score1;
   			//create function to signify round has ended
   			round++;
   			//myFunction();
		} else if (parseInt($('#r2').css("top")) < parseInt($('#finish').css("top"))) {
			document.getElementById("finish").removeEventListener("keydown", keydownFunction);
	   		// alert("Player2 wins the race!");
	   		//end timer
	   		//need a var to keep track of how many times player won game
	   		score2++;
	   		document.getElementById("score2").innerHTML = score2;
	   		//create function to signify round has ended
	   		round++;
	   		//myFunction();
		}
	}
	document.addEventListener("keydown", keydownFunction);

}
