// function shakeDice(diceSize){
// 	diceSize = 1;
// 	let roll = 0;
// 	if(diceSize < 7){
// 		roll = Math.floor(Math.random()*7);
// 	}
// 	console.log(roll);
// }
// shakeDice(4);


// function rollDie(diceSize){
// 	return Math.floor(Math.random()*12);
// }


// let d6 = rollDie(6);


function shakeDice(diceSize){
	let roll=0;
	roll = Math.floor(Math.random()*12);
	switch (roll){
		case 1:
		console.log(1);
		break;
	}
	switch (roll){
		case 2:
		console.log(2);
		break;
	}
	switch (roll){
		case 3:
		console.log(3);
		break;
	}
	switch (roll){
		case 4:
		console.log(4);
		break;
	}
	switch (roll){
		case 5:
		console.log(5);
		break;
	}
	switch (roll){
		case 6:
		console.log(6);
		break;
	}
	switch (roll){
		case 7:
		console.log("Wild!");
		break;
	}
	switch (roll){
		case 8:
		console.log("Blank");
		break;
	}
	switch (roll){
		case 9:
		console.log("Roll Twice!");
		break;
	}
	switch (roll){
		case 10:
		console.log("Remove One Value");
		break;
	}
	switch (roll){
		case 11:
		console.log("Start Over!");
		break;
	}
}


shakeDice(4);