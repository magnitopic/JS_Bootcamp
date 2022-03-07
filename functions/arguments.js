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
console.log(getTip(34, 0.35));
console.log(getTip(15.7, 0.15));

// Challenge Template Strings

let calculateTip = function (bill, tipPorcentage = 0.25) {
	return `A ${tipPorcentage * 100}% tip on ${bill}€ would be ${Math.round(
		bill + bill * tipPorcentage
	)}€`;
};

console.log(calculateTip(100));
console.log(calculateTip(75.43, 0.5));
console.log(calculateTip(23, 0.1));
