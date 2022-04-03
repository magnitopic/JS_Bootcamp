let todos = [
	{
		text: "Walk",
		completed: true,
	},
	{
		text: "Work",
		completed: true,
	},
	{
		text: "Coffe",
		completed: false,
	},
	{
		text: "Sleep",
		completed: false,
	},
	{
		text: "Read",
		completed: true,
	},
];

const countTodos = function () {
	let counter = 0;
	todos.forEach((todo) => {
		if (!todo.completed) {
			counter++;
		}
	});
	return counter;
};

let paragraph = document.createElement("p");
paragraph.textContent = `You have ${countTodos()} todos left to complete`;
document.querySelector("body").appendChild(paragraph);

todos.forEach((todo, index) => {
	let p = document.createElement("p");
	p.textContent = `${index + 1}. ${todo.text} - ${todo.completed}`;
	document.querySelector("body").appendChild(p);
});
