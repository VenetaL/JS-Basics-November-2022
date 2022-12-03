function sumOfTwoNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let magicSum = 0;

    let numberToMagicCombination = 0;
 
        for (let x = firstNumber; x <= secondNumber; x++) {
            for (let y = firstNumber; y <= secondNumber; y++) {
                magicSum = x + y;
                if (magicSum !== magicNumber) {
                    numberToMagicCombination++;
                } else if (magicSum === magicNumber) {
                    numberToMagicCombination++;
                    console.log(`Combination N:${numberToMagicCombination} (${x} + ${y} = ${magicNumber})`)
                    return;
                } 
            }
        }
    

    console.log(`${numberToMagicCombination} combinations - neither equals ${magicNumber}`)

}

sumOfTwoNumber(["88", 
"888", 
"2000"])



