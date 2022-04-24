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
	const noteEl = document.createElement("div");
	const textEl = document.createElement("span");
	const button = document.createElement("button");

	// remove note button
	button.textContent = "X";
	noteEl.appendChild(button);

	// note title text
	if (note.title.length > 0) {
		textEl.textContent = note.title;
	} else {
		textEl.textContent = "Unnamed note";
	}
	noteEl.appendChild(textEl);

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
