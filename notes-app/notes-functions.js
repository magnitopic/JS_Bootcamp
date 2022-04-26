// Reed existing notes form LocalStorage
const getSavedNotes = function () {
	const notesJSON = localStorage.getItem("notes");

	if (notesJSON != null) {
		return JSON.parse(notesJSON);
	} else {
		return [];
	}
};

// save the notes to localStorage
const saveNotes = function (notes) {
	localStorage.setItem("notes", JSON.stringify(notes));
};

// remove a note from the list
const removeNote = function (id) {
	const noteIndex = notes.findIndex((note) => {
		return note.id === id;
	});

	if (noteIndex > -1) {
		notes.splice(noteIndex, 1);
	}
};

// generate the DOM structure for a note
const generateNoteDOM = function (note) {
	const noteEl = document.createElement("div");
	const textEl = document.createElement("a");
	const button = document.createElement("button");

	// remove note button
	button.textContent = "X";
	noteEl.appendChild(button);
	button.addEventListener("click", (e) => {
		removeNote(note.id);
		saveNotes(notes);
		renderNotes(notes, filters);
	});

	// note title text
	if (note.title.length > 0) {
		textEl.textContent = note.title;
	} else {
		textEl.textContent = "Unnamed note";
	}
	textEl.setAttribute("href", `./edit.html#${note.id}`);
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
