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

// Todos remaning text

const countTodos = function (todos) {
	let counter = 0;
	todos.forEach((todo) => {
		if (!todo.completed) {
			counter++;
		}
	});
	document.querySelector(
		"h2"
	).textContent = `You have ${counter} todos left to complete`;
};

countTodos(todos);

// todo search

const filters = {
	searchText: "",
};

let renderTodos = function (todos, filters) {
	const filteredTodos = todos.filter((todo) => {
		return todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#todos").innerHTML = "";
	countTodos(filteredTodos);

	filteredTodos.forEach((todo, index) => {
		let p = document.createElement("p");
		p.textContent = `${index + 1}. ${todo.text} - ${todo.completed}`;
		document.querySelector("#todos").appendChild(p);
	});
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
});

// New todo

document.querySelector("#newTodo").addEventListener("submit", (e) => {
	e.preventDefault();
	todos.push({
		text: e.target.elements.newTodo.value,
		completed: false,
	});
	e.target.elements.newTodo.value = "";
	renderTodos(todos, filters);
});
