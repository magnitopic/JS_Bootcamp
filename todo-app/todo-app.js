let todos = getSavedTodos();

// remaning Todos text
const countTodos = function (todos) {
	let counter = 0;
	todos.forEach((todo) => {
		if (!todo.completed) {
			counter++;
		}
	});
	generateSummaryDOM(counter);
};

countTodos(todos);

// todo search
const filters = {
	searchText: "",
	hideCompleted: false,
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
		id: uuidv4(),
		text: e.target.elements.newTodo.value,
		completed: false,
	});
	saveTodos(todos);
	e.target.elements.newTodo.value = "";
	renderTodos(todos, filters);
});

// Checkboxes
document.querySelector("#hide-completed").addEventListener("change", (e) => {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
});
