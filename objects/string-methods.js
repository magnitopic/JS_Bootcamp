let name = " Alejandro Magnitopic ";

// Length property
console.log(name.length);

// Upper case
console.log(name.toUpperCase());

// Lower case
console.log(name.toLowerCase());

// Icludes method
let password = "123456789password";
console.log(password.includes("password"));

// Trim
console.log(name.trim());

// Challenge

let isValidPassword = function (passwd) {
	return passwd.length >= 8 && !passwd.includes("password");
};

console.log(isValidPassword("passworder2347wr"));
console.log(isValidPassword("AcR45H"));
console.log(isValidPassword("JvYd5P38K4F"));
