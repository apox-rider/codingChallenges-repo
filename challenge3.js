// dolphins
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(dolphinsAverageScore);
// koalas
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
let koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolphins win the trophy 🏆");
}else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100){
    console.log("Koalas win the trophy 🏆");
}else if(dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100){
    console.log("Both win the trophy 🏆");
}else{
    console.log("No one wins the trophy 😥");
}


function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
    console.log(calcAverage);
}

console.log( calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3));
console.log( calcAverage(koalasScore1, koalasScore2, koalasScore3));

let avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}
checkWinner(avgDolphins, avgKoalas);