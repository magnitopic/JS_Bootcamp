const notes = [
	{
		title: "Yes",
		body: "Okay",
	},
	{
		title: "No",
		body: "Not ok",
	},
];

/* console.log(notes.pop());
notes.push("My new note");

console.log(notes.shift());
notes.unshift("My first note");

notes.splice(2, 0, "Yes"); */

const findNote = function (notes, noteTitle) {
	return notes.find((note, index) => {
		return note.title === noteTitle;
	});
};

const note = findNote(notes, "Yes");
console.log(note);
