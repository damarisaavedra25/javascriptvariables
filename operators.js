//comparison
let eq1 = 5 == 5;
let eq2 = 5 == '5';
console.log('eq1 =', eq1);
console.log('eq2 =', eq2);

let seq1 = 5 === 5;
let seq2 = 5 == '5';
console.log('strict equality =', seq1);
console.log('stric equality =', seq2);

let uneq = 5 != '5';
let suneq = 5 !== '5';

//relational operators
let gt = 2 > 2;
let gte = 2 >= 2;
let lt = 3 < 3;
let lte = 3 <= 3;
console.log('gt =', gt);
console.log('gte =', gte);
console.log('lt', lt);
console.log('lte =', lte);

//logical
let statement1 = 3 > 2; //true
let statement2 = 0 > 1; //false

let antitruth = !statement2;
console.log('antitruth =', antitruth);

let or = statement1 || statement2;
console.log('or =', or);

let and = statement1 && statement2;
console.log('and =', and);