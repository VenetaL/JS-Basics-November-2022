function sumPrimeNonPrime(input) {
    let primeNumbers = 0;
    let nonPrimeNumbers = 0;
    let foundNonPrime = 0;

    for (let i = 0; i <= input.length; i++) {
        let currentNumber = input[i];

        if (currentNumber === "stop") {
            break;
        } else {
            currentNumber = Number(input[i]);
        }

        if (currentNumber < 0) {
            console.log(`Number is negative.`)
        }

        let x = 2;
        while (x <= Math.sqrt(currentNumber) && currentNumber >= 0) {
            foundNonPrime = 0
                if (currentNumber % x === 0) {
                    nonPrimeNumbers += currentNumber;
                    foundNonPrime++
                    break;
                }
                x++;
            }

        if (foundNonPrime === 0 && currentNumber >=0) {
            primeNumbers +=currentNumber;
        }
    }
    


    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`)
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])








