let notes = [];

const filters = {
	searchText: "",
};

// Checked for existing saved data

const notesJSON = localStorage.getItem("notes");

if (notesJSON != null) {
	notes = JSON.parse(notesJSON);
}

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter((note) => {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#notes").innerHTML = "";

	filteredNotes.forEach((note) => {
		const noteEl = document.createElement("p");
		if (note.title.length > 0) {
			noteEl.textContent = note.title;
		} else {
			noteEl.textContent = "Unnamed note";
		}
		document.querySelector("#notes").appendChild(noteEl);
	});
};

renderNotes(notes, filters);

document.querySelector("#createNote").addEventListener("click", (e) => {
	notes.push({
		title: "",
		body: "",
	});
	localStorage.setItem("notes", JSON.stringify(notes));
	renderNotes(notes, filters);
});

document.querySelector("#searchText").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", (e) => {
	console.log(e.target.checked);
});
