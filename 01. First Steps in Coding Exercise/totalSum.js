// function totalSum (input) {
//     let deposit = Number(input[0]);
//     let depositTerm = Number(input[1]);
//     let depositRate = Number(input[2]);
//     let sum = (((deposit + depositTerm) * ((deposit * depositRate) / 12)));
//     console.log(sum);
// }

// totalSum([20, 5, 6])

function depositCalculator (input) {
    let depositedSum = Number(input[0]);
    let depositedTermMonths = Number(input[1]);
    let yearlyIncreasedPercent = Number(input[2]);
    let yearlyIncreseDesimal = yearlyIncreasedPercent / 100;
    let sum = depositedSum + depositedTermMonths * ((depositedSum * yearlyIncreseDesimal) / 12);

    console.log(sum);
}

depositCalculator ("200", "3", "5.7")