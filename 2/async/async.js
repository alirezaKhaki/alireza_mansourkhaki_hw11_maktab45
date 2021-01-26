//*****part-1*****
const fs = require('fs');

function async_create() {
    fs.writeFile('from.txt', '!this is "from" file!', function(err) {
        if (err) return err;
        console.log('Saved!');
    });
    fs.writeFile('to.txt', '!this is "to" file!', function(err) {
        if (err) return err;
        console.log('Saved!');
    });
    fs.writeFile('append.txt', '!this is "append" file!', function(err) {
        if (err) return err;
        console.log('Saved!');
    });
}

async_create()

fs.readFile("from.txt", 'utf8', function(err, data) {
    console.log('*****PART-1*****');
    if (err) return err;
    let dataFrom = data
    fs.writeFile("to.txt", dataFrom, function(err) {
        if (err) return err;
        fs.readFile("to.txt", 'utf8', function(err, data) {
            if (err) return err;
            console.log(data);
        })
    })
})

//*****part-3*****

fs.readFile("from.txt", 'utf8', function(err, data) {
    if (err) return err;
    let dataFrom = data
    fs.writeFile("to.txt", dataFrom, function(err) {
        if (err) return err;
        fs.readFile("append.txt", 'utf8', function(err, data) {
            if (err) return err;
            let dataAppend = data
            fs.appendFile('to.txt', dataAppend, function(err) {
                if (err) throw err;

                fs.readFile("to.txt", 'utf8', function(err, data) {
                    if (err) return err;
                    console.log('*****PART-3*****');
                    console.log(data);
                })
            })
        })
    })
})