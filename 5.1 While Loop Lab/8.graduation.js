function graduation(input) {
    let studentName = input[0]
    let allGrades = [];
    let sum = 0;
    let x = 1;
    let y = x + 1;

    while (x <= input.length) {
        let currentGrade = Number(input[x]);
        let nextGrade = Number(input[y])    
        
        allGrades = allGrades.concat(currentGrade)     
        sum += Number(input[x])

            if (currentGrade < 4 && nextGrade < 4) {
            console.log (`${studentName} has been excluded at ${y} grade`)
            break;
            }
            if (x === 12) {
            let averageGrade = sum / allGrades.length
            console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
            break;   
            }
        
        x++;
        y++;


    }


}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


    // for (let i = 1; i < input.length; i++) {
    //     let y = i + 1;
    //     let currentGrade = Number(input[i]);
    //     let nextGrade = Number(input[y])

