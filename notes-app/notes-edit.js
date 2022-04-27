const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const noteTitle = document.querySelector("#note-title");
const noteBody = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");

let note = notes.find((note) => {
	return note.id === noteId;
});
if (note === undefined) {
	location.assign("/notes-app");
}

noteTitle.value = note.title;
noteBody.value = note.body;

noteTitle.addEventListener("input", (e) => {
	note.title = e.target.value;
	saveNotes(notes);
});

noteBody.addEventListener("input", (e) => {
	note.body = e.target.value;
	saveNotes(notes);
});

removeElement.addEventListener("click", (e) => {
	removeNote(noteId);
	saveNotes(notes);
	location.assign("/notes-app");
});

window.addEventListener("storage", (e) => {
	if (e.key === "notes") {
		notes = JSON.parse(e.newValue);

		// duplicate code
		let note = notes.find((note) => {
			return note.id === noteId;
		});
		if (note === undefined) {
			location.assign("/notes-app");
		}

		noteTitle.value = note.title;
		noteBody.value = note.body;
	}
});
