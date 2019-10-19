const notes = require('./notes.js');
 const yargs = require ('yargs');
  
 
// yargs.version('1.1.1');
yargs.command({
    command:    "add",
    describe:   "add a note",
    builder:{ 
        title: {
            describe:       "Note Title",
            demandOption:   true,
            type:           "string"
        },
        body: {
            describe:       "Note Body",
            demandOption:   true,
            type:           "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
                 
    }
    
})
yargs.command({
    command: "remove",
    describe:"remove a note", 
    builder:{
        title:{ 
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
    } ,      
    handler (argv){
        notes.removeNote(argv.title);
        
    }
})
 
yargs.command({
    command: "list", 
    describe: 'list all the notes',
    handler (argv){
        notes.listNotes()
    }

})
yargs.command({
    command:"read",
    describe:"read a note",
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type : "string"
        },
    },
    handler (argv){
        notes.readNote(argv.title);
        
    }
})
yargs.parse();
