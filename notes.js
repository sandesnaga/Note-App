
const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {  
    return ("your notes...");

};

//add note 

const addNote = function(title, body){
    const notes = loadNotes();   
    const duplicateNote = notes.find((note)=>note.title === title
    );

    //const duplicateNOtes = notes.filter(function (note){return
    // note.title === title})
    
    
    if(!duplicateNote){ 
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse( "New note added!"));
    }else{
        console.log(chalk.red.inverse("Note title taken"));        
    }   
}

// function to remove note
const removeNote = (title)=>{
    const notes = loadNotes();
    const notestokeep = notes.filter((note)=>  note.title !== title
    );
    if(notes.length>notestokeep.length){
        console.log(chalk.bgGreen("notes removed!"));
    }
    else{
        console.log(chalk.bgRed("no notes found"));
        
    }
    saveNotes(notestokeep);

}

// function to list notes
const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your notes"));
    notes.forEach(element => {
        console.log(chalk.green("Title: "+ element.title));
        console.log(chalk.yellow("body: "+ element.body));
    });
};
// function to read particular  note
const readNote =(title) =>{
    const notes = loadNotes();
    const noteToRead = notes.find((note)=>note.title === title);
    if(noteToRead){
        console.log(chalk.green.inverse("Title: " + noteToRead.title));
        console.log(chalk.yellow.inverse("Title: " + noteToRead.body));
    }else{
        console.log(chalk.red.inverse("No note was found!"));
        
    }  

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);

};
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        
    } catch (e) {
        return [];
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote,

}