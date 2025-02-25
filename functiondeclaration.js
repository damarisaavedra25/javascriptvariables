showMessage('Hello World');
function showMessage(Text) {
    console.log(text);
}


//Example (let and scope)

let num = 10;
function showMessage(text) {
    let num = 1;
    console.log(num);
    console.log(text);
}

showMessage('hello'); // 1
console.log(num); //10

