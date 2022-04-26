const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const noteTitle = document.querySelector("#note-title");
const noteBody = document.querySelector("#note-body");

const note = notes.find((note) => {
	return note.id === noteId;
});
if (note === undefined) {
	location.assign("/notes-app");
}

noteTitle.value = note.title;
noteBody.value = note.body;

noteTitle.addEventListener("change", (e) => {
	note.title = e.target.value;
	saveNotes(notes);
});

noteBody.addEventListener("change", (e) => {
	note.body = e.target.value;
	saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", (e) => {
	removeNote(noteId);
	saveNotes(notes);
	location.assign("/notes-app");
});
