 let min = 1,
     max = 10,
     winningNum = getRandomNum(max,min);
     guessesLeft = 3;

 const game = document.querySelector('#game'),
       minNum = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessInput = document.querySelector('#guess-input'),
       guessBtn = document.querySelector('#guess-btn'),
       message = document.querySelector('.message');


 minNum.textContent = min; 
 maxNum.textContent = max; 

 game.addEventListener('mousedown',function(e){

 	if(e.target.className === 'play-again'){

 		window.location.reload(); 
 	}
 })

 guessBtn.addEventListener('click',function(){
 	let guess = parseInt(guessInput.value);

 	if(isNaN(guess) || guess < min || guess > max){
 		setMessage(`please enter a number between ${min} and ${max}`,'red');
 	}

 	if(guess === winningNum){


 	    gameOver(true,`${winningNum} is correct!!!!`); 

 	}else{

 		guessesLeft -= 1;

 		if(guessesLeft === 0){


 	       gameOver(false,`Game Over,you lost.The correct number was ${winningNum}`); 

 		}else{

 			guessInput.style.borderColor = 'red';

 			guessInput.value = '';

 			setMessage(`${guess} is not correct ,${guessesLeft} guessesLeft`,'red');
 		}

 	}
 });

 function gameOver(won, msg){

 	let color;

 	won === true ? color = 'green':color = 'red'

 	guessInput.disabled = true;
 
 	guessInput.style.borderColor = color;
	   
    message.style.color = color;

    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again'

 }

 function getRandomNum(max,min){
 	return Math.floor(Math.random()*(max-min+1)+min);
 }


 function setMessage(msg, color){
 	message.style.color = color;
 	message.textContent = msg;
 }