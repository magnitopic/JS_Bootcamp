let todos = [];

// read localStorage for data
const todosJSON = localStorage.getItem("todos");

if (todosJSON != null) {
	todos = JSON.parse(todosJSON);
}

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
	hideCompleted: false,
};

let renderTodos = function (todos, filters) {
	let filteredTodos = todos.filter((todo) => {
		return todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	// We filter the values more

	filteredTodos = filteredTodos.filter((todo) => {
		return !filters.hideCompleted || !todo.completed;
		/* if (filters.hideCompleted) {
			return !todo.completed;
		} else {
			return true;
		} */
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
	localStorage.setItem("todo", JSON.stringify(todos));
	e.target.elements.newTodo.value = "";
	renderTodos(todos, filters);
});

// Checkbox

document.querySelector("#hide-completed").addEventListener("change", (e) => {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});
