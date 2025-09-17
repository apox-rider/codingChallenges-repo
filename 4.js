// truthy and falsy values and equality 
// 0, "", undefined, null, NaN are falsy values
// everything else is truthy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));   

const money=(0); //falsy value
if(money){
    console.log("Don't spend it all at once !");
}else{
    console.log('You should get a job !');
}
let height; //undefined
if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is UNDEFINED');
}