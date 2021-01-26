const fs = require('fs')

const names = fs.readFileSync('names.txt', { encoding: 'utf8', flag: 'r' });
const numbers = fs.readFileSync('numbers.txt', { encoding: 'utf8', flag: 'r' });

function extract(file) { // EXTRACT ID AND NAME AND NUMBER FROM .TXT FILE
    let fileTostring = ""
    fileTostring += file
    fileTostring = fileTostring.split(/(\r\n|\n|\r)/gm)
    for (let i = 0; i < fileTostring.length; ++i) {
        fileTostring[i] = fileTostring[i].replace(/(\r\n|\n|\r)/gm, "")
    }

    for (let i = 0; i < fileTostring.length; ++i) {
        if (fileTostring[i] == '') {

            fileTostring.splice(i, 1)
        }
    }
    let output = []
    for (let i in fileTostring) {
        output.push(fileTostring[i].split("-"));
    }
    output = output.flat(Infinity);
    return output;
}
let namesAndid = extract(names)
let numbersAndid = extract(numbers)

// *****MAKING NAMES AND ID 
let name = []
for (let i = 1; i < namesAndid.length; i += 2) {
    let obj = {
        id: `${namesAndid[i-1]}`,
        name: `${namesAndid[i]}`,

    }
    name.push(obj)
}


// *****MAKING NUMBERS AND ID 
let number = []
for (let i = 1; i < numbersAndid.length; i += 2) {
    let obj = {
        id: `${numbersAndid[i-1]}`,
        number: `${numbersAndid[i]}`,

    }
    number.push(obj)
}

// *****MERGING NAMES AND NUMBERS BY ID
let name_number = [...name, ...number]
    // ****SORTING name_number ARRAY
name_number = name_number.sort((a, b) => {
    if (a.id > b.id) {
        return 1
    }
    if (a.id < b.id) {
        return -1
    }

    return 0

})

// ****GROUPING NUMBERS WITH SAME ID 
let data = name_number
let o = {}
let result = data.reduce(function(r, el) {
    let e = el.id
    if (!o[e]) {
        o[e] = {
            id: el.id,
            name: el.name,
            number: []
        }
        r.push(o[e]);
    }
    if (el.number !== undefined) {
        o[e].number.push(el.number);
    }
    return r;
}, [])

//***** OUTPUT
for (let i in result) {
    if (result[i].number.length > 1) { // IF SOMEONE HAS MORE THAN ONE NUMBER 
        console.log(`${result[i].name }'s numbers are ${result[i].number}.`);
    }
    if (result[i].number.length === 1) { // IF SOMEONE HAS ONLY ONE NUMBER
        console.log(`${result[i].name }'s number is ${result[i].number}.`);
    }
    if (result[i].number.length === 0) { // IF SOMEONE HAS NO NUMBER
        console.log(`${result[i].name } hasn’t any phone number. `);
    }
}