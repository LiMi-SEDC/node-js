const fs = require('fs');

// DONE with WRITING...
const writeFiles = (nameFile, text) => {
    fs.writeFile(nameFile, text, (err) => {
        if (err) throw err;

        console.log(`writed the file`);
    })
}

// DONE with READING...
const readFiles = (fileName) => {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;

        console.log(data);
    })
}

// DONE with APPENDING...
const appendFiles = (nameOfFileToAppend, text) => {
    fs.appendFile(nameOfFileToAppend, text, (err) => {
        if (err) throw err;
        console.log(`updated the file`);
    })
}


module.exports = {
    readFiles,
    writeFiles,
    appendFiles
}