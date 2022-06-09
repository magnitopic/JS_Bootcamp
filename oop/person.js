const Person = function (firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
};

Person.prototype.getBio = function () {
	return `${this.firstName} is ${this.age}`;
};

const me = new Person("Mag", "nitopic", "18");
console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);
console.log(person2.getBio());
