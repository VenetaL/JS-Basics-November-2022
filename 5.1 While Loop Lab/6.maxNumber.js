function maxNumber(input) {
    let i = 0;
    currentNumber = 0;
    allNumbers = [];

    while (i <= input.length) {
        currentNumber = input[i];

        if (currentNumber === "Stop") {
            break;
        } else {
            currentNumber = Number(input[i]);
        }

    allNumbers = allNumbers.concat(Number(input[i]));
    
    i++;
    
    }

    console.log(Math.max(...allNumbers))

}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
