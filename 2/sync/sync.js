const fs = require('fs');

function sync_create() {
    fs.writeFileSync("from.txt", '!this is "from" file!')
    fs.writeFileSync("to.txt", '!this is "to" file!')
    fs.writeFileSync("append.txt", '!this is "append" file!')
}
sync_create()

// ****part 3 *****
console.log("****PART-2*****");
const from = fs.readFileSync('from.txt', { encoding: 'utf8', flag: 'r' });
fs.writeFileSync("to.txt", from)
const to = fs.readFileSync('to.txt', { encoding: 'utf8', flag: 'r' });
console.log(to);

// ****part 4 *****
console.log("****PART-4*****");

const from_4 = fs.readFileSync('from.txt', { encoding: 'utf8', flag: 'r' });
const append_4 = fs.readFileSync('append.txt', { encoding: 'utf8', flag: 'r' });
fs.writeFileSync("to.txt", from_4, 'utf8')
fs.appendFileSync("to.txt", append_4, 'utf8');
const to_4 = fs.readFileSync('to.txt', { encoding: 'utf8', flag: 'r' });
console.log(to_4);