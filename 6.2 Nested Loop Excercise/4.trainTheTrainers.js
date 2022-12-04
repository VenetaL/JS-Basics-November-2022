function trainTheTrainers(input) {
    let judgesNumber = Number(input[0]);
    let allScores = 0;
    let allPresentations = 0;
    
    for (i = 1; i < input.length; i+= (judgesNumber +1)) {
        let presentation = input[i];

        if (presentation === "Finish") {
            break;
        } 
        allPresentations ++;
        let presentationAllScores = 0;
       
            for (y = 1; y <= judgesNumber; y++) {
                let presentationScore = Number(input[i + y])
                allScores += presentationScore;

                presentationAllScores += presentationScore;

                if (y === judgesNumber) {
                let averageScore = presentationAllScores / judgesNumber;
                console.log(`${presentation} - ${averageScore.toFixed(2)}.`)
                }
            }
        
    }
    let totalNumberScores = allPresentations * judgesNumber;
    let averageAllScore = allScores / totalNumberScores;
    console.log(`Student's final assessment is ${averageAllScore.toFixed(2)}.`)

}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

