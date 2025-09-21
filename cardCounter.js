let count=0;
function cc(card){
    if(card===2 || card===3 || card===4 || card===5 || card===6){
         count++
    }
    else if(card===10 || card==="J" || card==="Q" || card==="K" || card==="A"){
         count--
    }
    const decision=count>0?"Bet":"Hold";
    return count +" "+ decision;
}

console.log(cc(2));
console.log(cc(3)); 
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));