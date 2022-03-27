const notes = [
	{
		title: "Sequi magnam autem et quos.",
		body: "Veniam excepturi similique ab nobis eum.",
	},
	{
		title: "Eum et eius rem ipsa.",
		body: "Magni ratione iusto mollitia eveniet voluptas quas dolor sit.",
	},
	{
		title: "Est non aperiam eius et accusamus nulla expedita. ",
		body: "Qui natus recusandae debitis voluptatem eius ut repudiandae",
	},
	{
		title: "Autem distinctio quae dignissimos ea.",
		body: "Deleniti quia dolor rerum eos et architecto at.",
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

const findNotes = function (notes, query) {
	return notes.filter((note, index) => {
		const isTitleMtach = note.title
			.toLowerCase()
			.includes(query.toLowerCase());
		const isBodyMatch = note.body
			.toLowerCase()
			.includes(query.toLowerCase());
		return isTitleMtach || isBodyMatch;
	});
};

console.log(findNote(notes, "Autem distinctio quae dignissimos ea."));
console.log(findNotes(notes, "au"));
