// Reed existing notes form LocalStorage
const getSavedNotes = function () {
	const notesJSON = localStorage.getItem("notes");

	if (notesJSON != null) {
		return JSON.parse(notesJSON);
	} else {
		return [];
	}
};

// generate the DOM structure for a note
const generateNoteDOM = function (note) {
	const noteEl = document.createElement("p");
	if (note.title.length > 0) {
		noteEl.textContent = note.title;
	} else {
		noteEl.textContent = "Unnamed note";
	}

	return noteEl;
};

// render application notes
const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter((note) => {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#notes").innerHTML = "";

	filteredNotes.forEach((note) => {
		const noteEl = generateNoteDOM(note);
		document.querySelector("#notes").appendChild(noteEl);
	});
};
