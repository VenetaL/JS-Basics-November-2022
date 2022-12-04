function specialNumbers(input) {
    let n = Number(input[0]);

    let firstNumber = 1111;
    let secondNumber = 9999;
    let currentNumber = 0;
    let allMagicNumbers = [];

    for (let x = firstNumber; x <= secondNumber; x++) {
        let wowItIsMagic = 0;
        
        for (let y = 0; y <= 3; y++) {
            currentNumber = Number(String(x)[y]);

            if (n % currentNumber === 0) { 
                wowItIsMagic++;
            } 
            if (wowItIsMagic === 4) {
                allMagicNumbers = allMagicNumbers.concat(x)
            }
        }
    }

    console.log(...allMagicNumbers);

}

specialNumbers([`3`]);