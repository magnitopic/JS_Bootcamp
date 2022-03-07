let add = function (a, b, c) {
	return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
	return `Name ${name} - Score ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge

let getTip = function (bill, tipPorcentage = 0.2) {
	return bill + bill * tipPorcentage;
};

console.log(getTip(20));
console.log(getTip(34,.35));
console.log(getTip(15.7,.15));
