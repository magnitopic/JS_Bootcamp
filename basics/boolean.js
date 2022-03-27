// === - equality operator
// != - no equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 32;
let isFreezing = temp <= 32;

console.log(isFreezing);

// Challange
// we still haven't learnt functions, but I didn’t want to duplicate code

let ageCheker = function (age) {
	if (age <= 7) {
		console.log("You are a child");
	} else if (age >= 65) {
		console.log("You are a senior");
	} else {
		console.log("You are an adult");
	}
};

ageCheker(69);
ageCheker(5);
ageCheker(43);
