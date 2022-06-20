// challenge area

const Hangman = function (word, guesses) {
	this.word = word.toLowerCase().split("");
	this.guesses = guesses;
	this.guessedLetters = ["a", "e"];
};

Hangman.prototype.getPuzzel = function () {
	let puzzel = "";
	this.word.forEach((letter) => {
		if (letter === " " || this.guessedLetters.includes(letter)) {
			puzzel += letter;
		} else {
			puzzel += "*";
		}
	});
	return puzzel;
};

const game1 = new Hangman("Cat", 2);
console.log(game1.getPuzzel());

const game2 = new Hangman("Hello There", 4);
console.log(game2.getPuzzel());
