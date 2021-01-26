const fs = require('fs');

function async_create() {
    fs.writeFile('newFile.txt', '!new file!', function(err) {
        if (err) return err;
        console.log('Saved!');

        const path = 'newFile.txt' // change the address to see the other output

        fs.exists(path, function(exists) {
            if (exists) {
                console.log("file avilable");
            } else {
                console.log("file not avilable!");
            }
        });



    })


}

async_create()