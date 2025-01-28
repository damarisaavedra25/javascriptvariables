/**When you declare a variable using var, 
 * the declaration is hoisted to the top of its scope, 
 * but the initialization is not. This means that the variable exists, 
 * but its value is undefined until the line where you assign a value is reached.
 */

console.log(x); // undefined
var x = 5; 

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

/**Function hoisting:
Function declarations are completely hoisted
to the top of their scope, which means you can call them before they are declared 
in the code.*/


foo(); // "Hello"

function foo() {
  console.log("Hello");
}

/**
 * Important points to remember:
Hoisting can make code harder to read and understand,
 so it's generally recommended to declare variables and functions 
 at the top of their scope.
Using let and const can help avoid issues related to hoisting,
as they enforce a more predictable behavior.
Function expressions (e.g., const foo = function() {}) are not hoisted, as they are treated as variable assignments.
 */