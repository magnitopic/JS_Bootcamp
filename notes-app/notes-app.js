/* const p = document.querySelector("p");
p.remove(); */

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach((p) => {
	p.textContent="*****"
	// console.log(p.textContent);
	// p.remove();
});
