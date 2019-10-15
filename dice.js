
function shakeDice(diceSize){
	let shakeValue = Math.floor(Math.random()*diceSize+1);
	return shakeValue;
}

function runGame(){
	let roll = shakeDice(6);
	let previouslyRolled = [];
	switch (roll){
		case 1:
		console.log(1);
		previouslyRolled.push(1);
		break;
	}
	switch (roll){
		case 2:
		console.log(2);
		previouslyRolled.push(2);
		break;
	}
	switch (roll){
		case 3:
		console.log(3);
		previouslyRolled.push(3);
		break;
	}
	switch (roll){
		case 4:
		console.log(4);
		previouslyRolled.push(4);
		break;
	}
	switch (roll){
		case 5:
		console.log(5);
		previouslyRolled.push(5);
		break;
	}
	switch (roll){
		case 6:
		console.log(6);
		previouslyRolled.push(6);
		break;
	}
	switch (roll){
		case 7:
		console.log("Wild!");
		previouslyRolled.push("Wild");
		break;
	}
	switch (roll){
		case 8:
		console.log("Blank");
		previouslyRolled.push("Blank");
		break;
	}
	switch (roll){
		case 9:
		console.log("Roll Twice!");
		previouslyRolled.push("Roll Twice");
		break;
	}
	switch (roll){
		case 10:
		console.log("Remove One Value");
		previouslyRolled.push("Remove One Value");
		break;
	}
	switch (roll){
		case 11:
		console.log("Start Over!");
		previouslyRolled.push("Start Over!");
		break;
	}
	console.log(previouslyRolled)
}


runGame();
