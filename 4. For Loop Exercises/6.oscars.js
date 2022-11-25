function oscars(input) {
    let artistName = input[0];
    let artistPoints = Number(input[1]);
    let jouriNumber = Number(input[2]) * 2;

    let totalPoints = artistPoints;
    

    for (let i = 2; i < (2 + jouriNumber); i++) {
        if (i % 2 === 1 && totalPoints <= 1250.5) {
           let jouriName = input[i];
           let jouriPoints = Number(input[++i]);
           let jouriNameLength = Number(jouriName.length);
           totalPoints = totalPoints + ((jouriNameLength * jouriPoints) /2); 
        }
    }

    if (totalPoints <= 1250.5) {
        let difference = 1250.5 - totalPoints;
        console.log(`Sorry, ${artistName} you need ${difference.toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${artistName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

