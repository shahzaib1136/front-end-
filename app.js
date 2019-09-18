const notes = require('./notes');
const yargs = require('yargs');
const argv = yargs.argv;

const command = argv._[0];
if (command === "add") {
    const note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log('note has been created');
    }
    else {
        console.log('Note title Taken');
    }
}
else if (command === "list") {
    var allNotes = notes.getAll();
    if (allNotes) {
        allNotes.map((note) => {
            console.log(`title: ${note.title}`);
            console.log(`title: ${note.body}`);
            console.log(`     =============================`)
        })
    }
    else {
        console.log('No Note Exist yet');
    }
}
else if (command === "read") {
    let getNote = notes.getNote(argv.title);
    if (getNote.length > 0) {
        console.log(`note has been found`)
        console.log(`title: ${getNote[0].title}`)
        console.log(`body:  ${getNote[0].body}`)
    }
    else {
        console.log('No Note Found');
    }
}
else if (command === "remove") {
    let getNote = notes.removeNote(argv.title);
    if (getNote.length > 0) {
        console.log(`Node has been deleted with 
        title: ${getNote[0].title}
        body: ${getNote[0].body}
        `);
    }
    else {
        console.log('No Note Found with this title');
    }
}
else {
    console.log('Command is UnIdentify');
}

