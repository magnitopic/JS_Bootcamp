const notes = ["Note1", "Note2", "Note3"];

/* console.log(notes.pop());
notes.push("My new note");

console.log(notes.shift());
notes.unshift("My first note");

notes.splice(2, 0, "Yes"); */

notes[2] = "New note 3";

console.log(notes.length);
console.log(notes);

for (let count = 0; count >= 0; count--) {
	console.log(count);
}

for (let count = 0; count < notes.length; count++) {
	console.log(notes[count]);
}
