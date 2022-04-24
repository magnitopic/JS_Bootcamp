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
	const div = document.createElement("div");
	const checkBox = document.createElement("input");
	const p = document.createElement("p");
	const delButton = document.createElement("button");

	// atributes and values
	div.setAttribute("class", "todo");
	checkBox.setAttribute("type", "checkbox");
	p.textContent = `${index + 1}. ${todo.text} - ${todo.completed}`;
	delButton.textContent = "X";

	// add elements to div
	div.appendChild(p);
	div.appendChild(checkBox);
	div.appendChild(delButton);
	return div;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (counter) {
	document.querySelector(
		"h2"
	).textContent = `You have ${counter} todos left to complete`;
};
