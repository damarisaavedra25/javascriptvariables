//Switch/case
//The switch statement evaluates an expression, matching the expresion's value to a case clause, and executes statements
//associated with that case, as well as statements in cases that follow the matching case

const num = 50;

switch (num) {
case 50:
    console.log('fifty');
    break;
case 60:
    console.log('sixty');
    break;
case 70:
    console.log('seventy');
    break;
default:
    console.log('Default behaviour');
    break;
}