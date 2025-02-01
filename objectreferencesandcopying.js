//Object References and Copying in JavaScript

//Creating an object

/**crea un objecto -> variable llamada = person
 * con let le asigna dos propiedades 1 = name 2 = age
 * 
 */

let person = {
    name: "Alice",
    age: 25
};
console.log(person);

// personReference points to the same object as a person
let personReference = person;
console.log(personReference);

// modifying personReference also affects person
personReference.age = 30;
console.log(person.age) //output 30

// Demonstrating array references
let array = [1 , 2 , 3];
let arrayReference = array;

//Modifying array reference also affects array
arrayReference.push(4); // adding new elemnt '4' to the array
console.log(array);