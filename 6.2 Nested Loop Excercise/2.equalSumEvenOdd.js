function equalSumEvenOdd (input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let allMatchedNumbers = [];


    for (let x = firstNumber; x <= secondNumber; x++) {

        let y = 0;

        let oddNumbersSum = 0;
        let evenNumbersSum = 0;

        while (y < 6) {
            let oddNumber = String(x)[y];
            let evenNumber = String(x)[y + 1];

            oddNumbersSum += Number(oddNumber);
            evenNumbersSum += Number(evenNumber);

                if (y === 4 && oddNumbersSum === evenNumbersSum) {
                    allMatchedNumbers = allMatchedNumbers.concat(Number(x))
                }
            y += 2;              
        }
     
    }

    if (allMatchedNumbers.length >= 1) {
        console.log(...allMatchedNumbers)
}

}


equalSumEvenOdd(["100115",
"100120"])


