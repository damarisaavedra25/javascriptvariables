/*The for...of statement creates a loop iterating over iterable objects,
 including: built-in String, Array, array-like objects (e.g., arguments or NodeList), 
 TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with
 statements to be executed for the value of each distinct property of the object.*/

 const arrayOfNumber = [1,2,3,4,5];

for (let el of arrayOfNumber){
    console.log(el);
};

const estudiar = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
for (const dia of estudiar) {
console.log(dia);
} 

const arr = [1,2,3,4,5];
let sum = 0;
for (let el of arr) {
    sum += el;
}

console.log(sum);