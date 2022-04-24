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
		document
			.querySelector("#todos")
			.appendChild(generateTodoDOM(todo, index));
	});
};

// Get the DOM elements for  an individual note
const generateTodoDOM = function (todo, index) {
	const p = document.createElement("p");
	p.textContent = `${index + 1}. ${todo.text} - ${todo.completed}`;
	return p;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (counter) {
	document.querySelector(
		"h2"
	).textContent = `You have ${counter} todos left to complete`;
};
