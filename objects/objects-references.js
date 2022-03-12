let myAccount = {
	name: "Magnitopic",
	expenses: 0,
	income: 0,
};

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount;
};

addExpense(myAccount, 2.5);
console.log(myAccount);
