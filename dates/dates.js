const now = new Date();
const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate);

console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// Challenge area
const date1 = new Date("December 2 2003 12:43:07");
const date2 = new Date("March 17 2017 3:58:24");
const date1Timestamp = date1.getTime();
const date2Timestamp = date2.getTime();

if (date1Timestamp < date2Timestamp) {
	console.log(date1.toString());
} else {
	console.log(date2.toString());
}
