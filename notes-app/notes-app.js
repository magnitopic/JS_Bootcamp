let notes = getSavedNotes();

const filters = {
	searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#createNote").addEventListener("click", (e) => {
	let id = uuidv4();
	notes.push({
		id: id,
		title: "",
		body: "",
		createdAt: new Date().getTime(),
		editedAt: new Date().getTime(),
	});
	saveNotes(notes);
	location.assign(`./edit.html#${id}`);
});

document.querySelector("#searchText").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
	if ((e.key = "notes")) {
		notes = JSON.parse(e.newValue);
		renderNotes(notes, filters);
	}
});
