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

// Challenge - addIncome
let addIncome = function (account, amount) {
	account.income = account.income + amount;
};
// Challenge - resetAccount
let resetAccount = function (account) {
	account.expenses = 0;
	account.income = 0;
};
// Challenge - getAccountSummary
let getAccountSummary = function (account) {
	console.log(
		`${account.name}'s has ${account.expenses}€ in expenses and ${account.income}€ in income`
	);
};

addIncome(myAccount, 1000);
addExpense(myAccount, 547);
addExpense(myAccount, 85);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
