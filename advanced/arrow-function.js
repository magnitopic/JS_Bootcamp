const square = (num) => num * num;

const squareLong = (num) => {
	return num * num;
};

console.log(square(5));

const people = [
	{
		name: "Alex",
		age: 18,
	},
	{
		name: "Dane",
		age: 37,
	},
	{
		name: "Jesse",
		age: 25,
	},
];

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

// Challenge area

//	1. find the person with age equal to 25
//	2. Print their name

console.log(people.find((person) => person.age === 25).name);
