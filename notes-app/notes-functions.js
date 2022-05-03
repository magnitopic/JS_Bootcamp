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

// Sort your notes by one of three ways
const sortNotes = function (notes, sortBy) {
	if (sortBy === "byEdited") {
		return notes.sort((a, b) => {
			if (a.updatedAt > b.updatedAt) {
				return -1;
			} else if (a.updatedAt < b.updatedAt) {
				return 1;
			} else {
				return 0;
			}
		});
	} else {
		return notes;
	}
};

// render application notes
const renderNotes = function (notes, filters) {
	notes = sortNotes(notes, filters.sortBy);

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

// generate the last edited message
const generateLastEdited = function (timestamp) {
	return `Last edited ${moment(timestamp).fromNow()}`;
};
