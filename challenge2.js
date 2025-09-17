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

if(markHigherBMI){
    console.log(`Mark's BMI  is higher than John's  !`);
    console.log(`Mark's BMI ${BMI(massMark,heightMark)} is higher than John's BMI${BMI(massJohn,heightJohn)} !`);
}else{
    console.log(`John's BMI is higher than Mark's !`);
    console.log(`John's BMI ${BMI(massJohn,heightJohn)} is higher than Mark's BMI${BMI(massMark,heightMark)} !`);
}

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
if(markHigherBMI){
    console.log(`Mark's BMI  is higher than John's  !`);
    console.log(`Mark's BMI ${BMI(massMark,heightMark)} is higher than John's BMI${BMI(massJohn,heightJohn)} !`);
}   else{
    console.log(`John's BMI is higher than Mark's !`);
    console.log(`John's BMI ${BMI(massJohn,heightJohn)} is higher than Mark's BMI${BMI(massMark,heightMark)} !`);
}