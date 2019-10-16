

function shakeDice(diceSize){
	let shakeValue = Math.floor(Math.random()*diceSize+1);
	return shakeValue;
}

function runGame(){
	let previouslyRolled = [];
	for(let i=0; i<=5;i++){
		let roll = howManySidesToUse(previouslyRolled);
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
				previouslyRolled.push(+prompt("What number do you choose?"));
				break;
			case 8:
				console.log("Roll Again");
				i--;
				break;
			case 9:
				console.log("Two Free Rolls");
				i -= 2;
				break;
			case 10:
				console.log("Remove One Value");
				previouslyRolled.pop();
				break;
			case 11:
				console.log("Start Over!");
				previouslyRolled = [];
				i = 0;
				break;
		}
		console.log(previouslyRolled)
	}
	gameDetermination(previouslyRolled);	
}

function howManySidesToUse(previouslyRolled){
	if(previouslyRolled.length == 0){
		diceSize = 6;
	} else if(previouslyRolled.length == 1){
		diceSize = 7;
	} else if(previouslyRolled.length == 2){
		diceSize = 8;
	} else if(previouslyRolled.length == 3){
		diceSize = 9;
	} else if(previouslyRolled.length == 4){
		diceSize = 10;
	} else {
		diceSize = 11;
	}
	let shakeResult = shakeDice(diceSize);
	return shakeResult;
}


function gameDetermination(previouslyRolled){
	if(previouslyRolled.includes(1) && previouslyRolled.includes(2) && previouslyRolled.includes(3) && previouslyRolled.includes(4) && previouslyRolled.includes(5)){
		console.log("You Win!");
	} else if(previouslyRolled.includes(2) && previouslyRolled.includes(3) && previouslyRolled.includes(4) && previouslyRolled.includes(5) && previouslyRolled.includes(6)){
		console.log("You Win!");
	} else {
		console.log("Better Luck Next Time.")
	}
	
}


runGame();



