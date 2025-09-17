function calcBMI(mass, height){
    return mass/(height**2);
    console.log(calcBMI);
}

let person1={
    fullName:'John Smith',
    mass:92,
    height:1.95,
}
let person2={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
}

console.log(person1.calcBMI=calcBMI(person1.mass,person1.height));
console.log(person2.calcBMI=calcBMI(person2.mass,person2.height));

if(person1.calcBMI>person2.calcBMI){
    console.log(`${person1.fullName}'s BMI is higher than ${person2.fullName}'s BMI !`);
}
else if(person2.calcBMI>person1.calcBMI){
    console.log(`${person2.fullName}'s BMI is higher than ${person1.fullName}'s BMI !`);
}










// data 1
// mark
let massMark=78;
let heightMark=1.69;

// john
let massJohn=92;
let heightJohn=1.95;

 
console.log(calcBMI(massMark,heightMark));
console.log(calcBMI(massJohn,heightJohn));

let markHigherBMI = calcBMI(massMark,heightMark) > calcBMI(massJohn,heightJohn);
console.log( markHigherBMI);

// data 2
// mark
massMark=95;    
heightMark=1.88;
// john
massJohn=85;
heightJohn=1.76;

console.log(calcBMI(massMark,heightMark));  
console.log(calcBMI(massJohn,heightJohn));

markHigherBMI = calcBMI(massMark,heightMark) > calcBMI(massJohn,heightJohn);
console.log( markHigherBMI);