
function shakeDice(diceSize){
	let shakeValue = Math.floor(Math.random()*diceSize+1);
	return shakeValue;
}

function runGame(){
	let previouslyRolled = [];
	for(let i=0; i<=5;i++){
		let roll = shakeDice(11);
		switch (roll){
			case 1:
				console.log(1);
				previouslyRolled.push(1);
				break;
			case 2:
				console.log(2);
				previouslyRolled.push(2);
				break;
			case 3:
				console.log(3);
				previouslyRolled.push(3);
				break;
			case 4:
				console.log(4);
				previouslyRolled.push(4);
				break;
			case 5:
				console.log(5);
				previouslyRolled.push(5);
				break;
			case 6:
				console.log(6);
				previouslyRolled.push(6);
				break;
			case 7:
				console.log("Wild!");
				previouslyRolled.push(prompt("What number do you choose?"));
				break;
			case 8:
				console.log("Blank");
				previouslyRolled.push(undefined);
				break;
			case 9:
				console.log("Roll Twice!");
				previouslyRolled.push("Roll Twice");
				break;
			case 10:
				console.log("Remove One Value");
				previouslyRolled.pop();
				break;
			case 11:
				console.log("Start Over!");
				previouslyRolled.splice(0,6);
				break;
		}
		console.log(previouslyRolled)
	}
}

function howManySidesToUse(){
	if(previouslyRolled.length = 0){
		diceSize = 6;
	} else if(previouslyRolled.length = 1){
		diceSize = 7;
	} else if(previouslyRolled.length = 2){
		diceSize = 8;
	} else if(previouslyRolled.length = 3){
		diceSize = 9;
	} else if(previouslyRolled.length = 4){
		diceSize = 10;
	} else {
		diceSize = 11;
	}

}

runGame();