 const validator = require("validator");
 const chalk = require('chalk');
 const yargs = require ('yargs');
 
// yargs.version('1.1.1');
yargs.command({
    command: "add",
    describe: "add a note",
    builder: {
        title: {
            describe:"Note Title",
            demandOption: true,
            type: String
        },
        body: {
            describe: "Note Body",
            demandOption:true,
            type: String
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title );
        console.log("Body: "+ argv.body);
                 
    }
    
})
yargs.command({
    command: "remove",
    describe:"remove a note",
    
    handler: function(){
        console.log("removing a note");
        
    }
})
 
yargs.command({
    command: "list",
    describe: 'list all the notes',
    handler: function(){
        console.log("this will list the notes in future");
    }

})
yargs.command({
    command:"read",
    describe:"read a note",
    handler:function(){
        console.log("this will read a file ");
        
    }
})
yargs.parse();
