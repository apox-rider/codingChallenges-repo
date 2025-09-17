function BMI(mass, height){
    return mass/(height**2);
    console.log(BMI);
}


// data 1
// mark
let massMark=78;
let heightMark=1.69;
// john
let massJohn=92;
let heightJohn=1.95;

 
console.log(BMI(massMark,heightMark));
console.log(BMI(massJohn,heightJohn));

let markHigherBMI = BMI(massMark,heightMark) > BMI(massJohn,heightJohn);
console.log( markHigherBMI);

// data 2
// mark
massMark=95;    
heightMark=1.88;
// john
massJohn=85;
heightJohn=1.76;

console.log(BMI(massMark,heightMark));  
console.log(BMI(massJohn,heightJohn));

markHigherBMI = BMI(massMark,heightMark) > BMI(massJohn,heightJohn);
console.log( markHigherBMI);