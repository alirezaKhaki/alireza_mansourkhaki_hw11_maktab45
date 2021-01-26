let firstName = 'alireza'
let lastName = 'khaki'

function print(a, b, cb) {
    let sum = "your name is: " + a + " " + b
    cb(sum)
}
print(firstName, lastName, function(f) {
    console.log(f);
})