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

console.log(getThingsToDo(todos));

/* console.log(todos);
deleteTodo(todos, "yes");
console.log(todos); */
