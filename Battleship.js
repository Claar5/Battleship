/*-------------------------------------------------------------
BATTLESHIP
-------------------------------------------------------------*/
//npm no user package downloads can be trusted

var readlineSync = require('readline-sync');
var UserName = readlineSync.question("What is your name: ");

console.log('Welcome ' + UserName +'!');
/* the board has nine space much like tic tac toe
the player gets three chances to hit the ship which occupies one space*/

const playerBoard = [];
const row = 3;
const col = 3;

for(let i = 0; i < row; i++){
	playerBoard.push([]);//add an array to each space in the original array of 3 spaces
	for(let j = 0; j < col; j++){
		playerBoard[i].push('-');//add an - to each empty space in all the arrays
	}
}

for (i = 0; i < row; i++){
	console.log(playerBoard[i]);  //display board
}
//GUESSES
const maxGuess = 3;
let userGuess = maxGuess;
//SHIP PLACEMENT
const shipRow = Math.floor(Math.random() * row);
const shipCol = Math.floor(Math.random()* col);


//ATTACK
while(userGuess > 0){
	console.log(`User guesses remaining ${userGuess}`);
	
	let nextMove = readlineSync.question(`Enter your next move ${UserName}\nfirst number is row 0 to 2 and second number is column 0 to 2\n`).split(',');
	
	let rowGuess = +nextMove[0];
	let columnGuess = +nextMove[1]
	//mark the guess on the board
	
	if(rowGuess === shipRow && columnGuess === shipCol){
		for (i = 0; i < row; i++){
			console.log(playerBoard[i]);  
		}
		console.log("You have hit the ship, well done!!");
		playerBoard[rowGuess][columnGuess] = 's';
		
		break;
	}
	else{
		console.log("Miss!!!");
		playerBoard[rowGuess][columnGuess] = 'x';
	}
	
	for (i = 0; i < row; i++){
		console.log(playerBoard[i]);  
	}
	
	userGuess--;
	if(userGuess === 0){
		console.log('You lose. Displaying ship');
		playerBoard[shipRow][shipCol] = 'S'
		for (i = 0; i < row; i++){
			console.log(playerBoard[i]);  
		}
	}
	
}