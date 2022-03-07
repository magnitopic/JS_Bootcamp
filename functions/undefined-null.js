let name;

name = "Jen";

if (name === undefined) {
	console.log("Please give a name!");
} else {
	console.log(name);
}

let square = function (num) {
	console.log(num);
};

let result = square();
console.log(result);

// null is used by the developer to indicate they changed a var value

let age = 27;

age = null;

console.log(null);
