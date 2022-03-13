let num = 3.14159;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let randomNum = Math.random();
console.log(randomNum);

let min = 10;
let max = 20;
let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rnd);

// Challenge
let makeGuess = function (guess) {
	let rnd = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	return guess === rnd;
};

console.log(makeGuess(1));
