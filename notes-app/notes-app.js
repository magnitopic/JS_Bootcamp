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

// localStorage.setItem("location", "Madrid");

// console.log(localStorage.getItem("location"));

// localStorage.removeItem("location");

// localStorage.clear();

let user = {
	name: "mag",
	age: 18,
};

let userJSON = JSON.stringify(user);
console.log(userJSON);
localStorage.setItem("user", userJSON);

userJSON = localStorage.getItem("user");
user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);

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

document.querySelector("#createNote").addEventListener("click", (e) => {
	e.target.textContent = "Clicked button";
});

document.querySelector("#searchText").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", (e) => {
	console.log(e.target.checked);
});
