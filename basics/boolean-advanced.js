let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
	console.log("Is account locked");
} else if (userRole === "admin") {
	console.log("Welcome Admin");
} else {
	console.log("Welcome");
}

// Challenge

let temp = 32;

if (temp >= 37) {
	console.log("It's hot outside!");
} else if (temp <= 15) {
	console.log("It's freezing outside!");
} else {
	console.log("Go for it. It's nice outside.");
}
