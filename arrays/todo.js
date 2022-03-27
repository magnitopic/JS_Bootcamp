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

// Challenge

const deleteTodo = function (todos, value) {
	const index = todos.findIndex((todo, index) => {
		return todo.text.toLowerCase() === value.toLowerCase();
	});
	// Added if so when no index found it dosen't del the last item
	if (index != -1) {
		todos.splice(index, 1);
	}
};

const getThingsToDo = function (todos) {
	return todos.filter((todo, index) => {
		return !todo.completed;
	});
};

const sortTodos = function (todos) {
	todos.sort((a, b) => {
		if (a.completed > b.completed) {
			return 1;
		} else if (a.completed < b.completed) {
			return -1;
		} else {
			return 0;
		}
	});
};


sortTodos(todos)
console.log(todos);

/* console.log(getThingsToDo(todos));
console.log(todos);
deleteTodo(todos, "yes");
console.log(todos); */
