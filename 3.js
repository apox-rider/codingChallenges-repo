// Type conversion
let inputYear = '1991';
inputYear = Number(inputYear);
console.log(inputYear + 18);

let num=7;
num=String(num);
console.log(`There are ${num}, 20 years students in the bus !`);

// Type coersion
console.log('I am '+ 23 + ' years old !'); //23 converted to string
console.log('23' - '10' - 3); // - operator converts to number
console.log('23' + '10' + 3); // + operator converts to string
console.log('23' * '2'); // * operator converts to number
console.log('23' / '2'); // / operator converts to number
console.log(2+3+4+'5'); // + operator converts to string
console.log('10'-'4'-'3'-2+'5'); // - operator converts to number, + operator converts to string