let age=22;
let drink=age<18?'water':'wine';
console.log(drink);


// challenge
 

let bill=275;
let tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
let total=bill+tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


bill=40;
tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
total=bill+tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


bill=430;
tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
total=bill+tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

function calcTip(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
    console.log(calcTip);
}
console.log(calcTip(100));

let bills=[125,555,44];
let tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
let totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,totals);

bills=[22,295,176,440,37,105,10,1100,86,52]
console.log(bills.length);
 