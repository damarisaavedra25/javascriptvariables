/*
for...in
The for...in statement iterates over all enumerable
properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
*/

const person = {
    firstName : 'John',
    lastName: 'Dou',
    age: 30,
}

for (let key in person) {
    console.log(key, person[key])
}
