"use strict";

// Fetch existing todos from localStorage
const getSavedTodos = () => {
	const todosJSON = localStorage.getItem("todos");
	try {
		return todosJSON ? JSON.parse(todosJSON) : [];
	} catch (e) {
		return [];
	}
};

// Save todos to localStorage
const saveTodos = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
let renderTodos = (todos, filters) => {
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
const generateTodoDOM = (todo, index) => {
	const div = document.createElement("div");
	const checkBox = document.createElement("input");
	const p = document.createElement("p");
	const delButton = document.createElement("button");

	// checkbox
	checkBox.setAttribute("type", "checkbox");
	if (todo.completed === true) {
		checkBox.checked = true;
	} else {
		checkBox.checked = false;
	}
	checkBox.addEventListener("change", (e) => {
		toggleTodo(todo.id, e.target.checked);
	});
	div.appendChild(checkBox);

	// paragraph
	p.textContent = `${index + 1}. ${todo.text}`;
	div.appendChild(p);

	//button
	delButton.textContent = "X";
	delButton.addEventListener("click", () => {
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	});
	div.appendChild(delButton);

	// div
	div.setAttribute("class", "todo");

	// add elements to div
	return div;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (counter) => {
	document.querySelector(
		"h2"
	).textContent = `You have ${counter} todos left to complete`;
};

// remove todo
const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
};

// change completed todos
const toggleTodo = (id, checked) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (todoIndex > -1) {
		todos[todoIndex].completed = checked;
	}
	saveTodos(todos);
	renderTodos(todos, filters);
	countTodos(todos);
};
