const { log } = require('console');
const fs = require('fs');
fs.writeFileSync("newFile.txt", '!this is "from" file!')
const path = 'newFile1.txt' // change this to get other output
if (fs.existsSync(path)) {
    console.log('file avilable');
} else {
    console.log('file not avilable!');
}