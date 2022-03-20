let todos = ["Walk", "Work", "Coffe", "Sleep", "Read"];

todos.splice(3, 1);
todos.push("Exercice");
todos.shift();

console.log(`You have ${todos.length} todos`);
todos.forEach((item, index) => {
	console.log(`${index}. ${item}`);
});

for (let i = 0; i < todos.length; i++) {
	console.log(todos[i]);
}
