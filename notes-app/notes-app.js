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

document.querySelector("#createNote").addEventListener("click", (e) => {
	e.target.textContent = "Clicked button";
});

document.querySelector("#removeAll").addEventListener("click", (e) => {
	document.querySelectorAll(".note").forEach((note) => {
		note.remove();
	});
});
