const fs = require('fs');
const path = require('path');

const directoryPath = 'D:/Vimal/techshop/src/Assets/images/products'; // Update the path as needed

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    fs.writeFile('filenames.txt', pngFiles.join('\n'), (err) => {
        if (err) {
            return console.log('Unable to write file: ' + err);
        }
        console.log('Filenames have been written to filenames.txt');
    });
});
