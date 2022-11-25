function tennisRanklist (input) {
    let tournamentsNumber = Number(input[0]);
    let startingPoints = Number(input[1]);
    let additionalPoints = 0;
    let wins = 0;

    for (let i = 2; i < 2 + tournamentsNumber; i++) {
        let success = input[i];
        switch (success) {
            case "W":
                additionalPoints = additionalPoints + 2000;
                wins++;
            break;

            case "F":
                additionalPoints = additionalPoints + 1200;
            break;

            case "SF":
                additionalPoints = additionalPoints + 720;
        }
    }

    let finalPoints = Math.floor(startingPoints + additionalPoints);
    let averagePoints = Math.floor((additionalPoints / tournamentsNumber));
    let percentWins = (wins / tournamentsNumber) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWins.toFixed(2)}%`)


}

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


