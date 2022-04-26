let notes = getSavedNotes();

const filters = {
	searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#createNote").addEventListener("click", (e) => {
	notes.push({
		id: uuidv4(),
		title: "",
		body: "",
	});
	saveNotes(notes)
	renderNotes(notes, filters);
});

document.querySelector("#searchText").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});
