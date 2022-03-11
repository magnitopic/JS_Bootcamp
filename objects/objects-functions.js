let myBook = {
	title: "1984",
	author: "George Orwell",
	pageCount: 326,
};

let otherBook = {
	title: "A peo`les history",
	author: "Howard Zinn",
	pageCount: 723,
};

let getSummary = function (book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSumary: `${book.title} is ${book.pageCount} pages long`,
	};
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSumary);

// Challenge

let converter = function (fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	let kelvin = celsius + 273.15;
	return {
		fahrenheit: fahrenheit,
		celsius: celsius,
		kelvin: kelvin,
	};
};

console.log(converter(23));
