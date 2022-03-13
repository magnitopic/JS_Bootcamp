let todos = ["Walk", "Work", "Coffe", "Sleep", "Read"];

todos.splice(3, 1);
todos.push("Exercice");
todos.shift();

console.log(`You have ${todos.length} todos`);
console.log(todos);
