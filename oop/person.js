const person = function (firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
};

const me = new person("Mag", "nitopic", "18");
console.log(me);

const person2 = new Person("Clancey", "Turner", 51);
console.log(person2);
