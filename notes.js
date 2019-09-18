const fs = require('fs');

var fetchNotes = () => {
    try {
        FileNotes = fs.readFileSync('notes.json');
        return JSON.parse(FileNotes);

    }
    catch (e) {
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}
var addNotes = (title = "movies", body = "add some content here") => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    debugger;

    var checkDuplicateTitle = notes.filter((note) => note.title == title)
    if (checkDuplicateTitle.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
        debugger;

    }
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    if (notes.length > 0) {
        return notes.filter((note) => note.title == title)
    }
    else {
        return [];
    }
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var removeNoteArray = [];
    if (notes.length > 0) {
        let removeNotes = notes.filter((note) => note.title == title);
        if (removeNotes) {
            let filterNotes = notes.filter((note) => note.title !== title);
            saveNotes(filterNotes);
            removeNoteArray = removeNotes;
        }
        return removeNoteArray;
    }
    else {
        return removeNoteArray;
    }
}

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote
}