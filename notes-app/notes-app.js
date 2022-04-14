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

const filters = {
	searchText: "",
};

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter((note) => {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#notes").innerHTML = "";

	filteredNotes.forEach((note) => {
		const noteEl = document.createElement("p");
		noteEl.textContent = note.title;
		document.querySelector("#notes").appendChild(noteEl);
	});
};

renderNotes(notes, filters);

// DOM - Document Object Model

document.querySelector("#createNote").addEventListener("click", (e) => {
	e.target.textContent = "Clicked button";
});

document.querySelector("#removeAll").addEventListener("click", (e) => {
	document.querySelectorAll(".note").forEach((note) => {
		note.remove();
	});
});

document.querySelector("#searchText").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
