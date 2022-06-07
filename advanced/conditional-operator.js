/* const age = 23;
const message = age >= 18 ? "You can vote" : "You cannot vote";
console.log(message); */

const age = 18;
const showPage = () => "Sowing the page";
const showErrorPage = () => "Not showing the page";

const message = age >= 18 ? showPage() : showErrorPage();
console.log(message);

// Challenge area

const team = ["tyler", "Poter"];

console.log(team.length() <= 4 ? `Team size: ${team.lenght()}` : "Too many people on your team");
