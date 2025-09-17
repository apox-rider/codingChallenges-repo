// equality
const  age="18";
if(age===18) console.log('You just became an adult :D (strict)');
else if(age==18) console.log('You just became an adult :D (loose)');


const hasDriverLicense=true;
const hasGoodVision=true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision){
    console.log('Sarah is able to drive !');
}
else if(hasDriverLicense || hasGoodVision){
    console.log('Sarah should not drive !');
}
const isTired=false;
if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive !');
}
 else {
    console.log('Sarah should not drive !');
}