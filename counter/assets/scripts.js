let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const INCREMENT = document.getElementById('increment');
const DECREMENT = document.getElementById('decrement');

INCREMENT.addEventListener('click', function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
});

DECREMENT.addEventListener('click', function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
});

/* NUMBERS COLOR */
const NUMBERS_COLOR = function() {
	if (Math.sign(CURRENT_NUMBER.textContent) == '-1'){
		document.getElementById('currentNumber').style.color = '#CE003E';	
	}
	else
	document.getElementById('currentNumber').style.color = '#1B1C1E';	
}

INCREMENT.addEventListener('click', NUMBERS_COLOR);
DECREMENT.addEventListener('click', NUMBERS_COLOR);
/* NUMBERS COLOR END*/