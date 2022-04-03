const notes = [
	{
		title: "Sequi magnam autem et quos.",
		body: "Veniam excepturi similique ab nobis eum.",
	},
	{
		title: "Eum et eius rem ipsa.",
		body: "Magni ratione iusto mollitia eveniet voluptas quas dolor sit.",
	},
	{
		title: "Est non aperiam eius et accusamus nulla expedita. ",
		body: "Qui natus recusandae debitis voluptatem eius ut repudiandae",
	},
	{
		title: "Autem distinctio quae dignissimos ea.",
		body: "Deleniti quia dolor rerum eos et architecto at.",
	},
];

// DOM - Document Object Model

/* const p = document.querySelector("p");
p.remove(); */

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach((p) => {
	p.textContent = "*****";
	// console.log(p.textContent);
	// p.remove();
});

// Add a new element

const newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph from JavaScript";
document.querySelector("body").appendChild(newParagraph);
