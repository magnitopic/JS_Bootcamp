const account = {
	name: "Mag",
	expenses: [],
};

const addExpense = function (expense, value) {
	account.expenses.push({
		expense: expense,
		value: value,
	});
	return "Expense added successfully";
};

const getAccountSummary = function () {
	let total = 0;
	account.expenses.forEach((element) => {
		total += element.value;
	});
	return `${account.name} has ${total}€ in expenses`;
};

addExpense("Rent", 950);
addExpense("Food", 55);
addExpense("Petrol", 40);
console.log(getAccountSummary());
