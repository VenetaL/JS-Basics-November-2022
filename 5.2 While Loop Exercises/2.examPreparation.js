function examPreparation(input) {
    let numberFails = Number(input[0]);

    let x = 1;
    let y = x + 1;
    let examName;
    let examScore; 
    let allScore = 0;
    let examNumber = [];
    let badScore = [];
    
    while (input[x] !== "Enough") {
        examName = input[x];
        examScore = Number(input[y]);
       
        allScore += examScore;
        examNumber = examNumber.concat(examScore);

            if (examScore <= 4) {
                badScore = badScore.concat(examScore)
            }

            if (numberFails === badScore.length) {
                break;
            }

        x+=2;
        y+=2;
    }
    
    if (numberFails === badScore.length) {   
    console.log(`You need a break, ${numberFails} poor grades.`)
    } else {     
    let averageScore = allScore / examNumber.length;
    console.log(`Average score: ${averageScore.toFixed(2)}`)
    console.log(`Number of problems: ${examNumber.length}`)
    console.log(`Last problem: ${input[x - 2]}`)
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

