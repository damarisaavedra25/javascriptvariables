function variableExamples() {
    // Using var
    console.log("Before var declaration:", a); // Output: undefined (hoisting)
    var a = 1;
    if (true) {
        var a = 2; // Same 'a' as above, function-scoped
        console.log("Inside block with var:", a); // Output: 2
    }
    console.log("After block with var:", a); // Output: 2

    // Using let
    try {
        console.log("Before let declaration:", b); // ReferenceError: Cannot access 'b' before initialization
    } catch (error) {
        console.log(error.toString());
    }
    let b = 1;
    if (true) {
        let b = 2; // Different 'b', block-scoped
        console.log("Inside block with let:", b); // Output: 2
    }
    console.log("After block with let:", b); // Output: 1

    // Using const
    try {
        console.log("Before const declaration:", c); // ReferenceError: Cannot access 'c' before initialization
    } catch (error) {
        console.log(error.toString());
    }
    const c = 1;
    if (true) {
        const c = 2; // Different 'c', block-scoped
        console.log("Inside block with const:", c); // Output: 2
    }
    console.log("After block with const:", c); // Output: 1

    try {
        c = 3; // TypeError: Assignment to constant variable.
    } catch (error) {
        console.log(error.toString());
    }
}

// Call the function to see the behavior
variableExamples();