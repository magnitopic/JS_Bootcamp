// Fetch existing todos from localStorage
const getSavedTodos = function () {
	const todosJSON = localStorage.getItem("todos");

	if (todosJSON != null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};

// Save todos to localStorage

const saveTodos = function (todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters

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
