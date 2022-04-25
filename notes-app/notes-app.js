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
