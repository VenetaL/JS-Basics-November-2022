function minNumber (input) {
    let i = 0;
    let allNumbers = [];
    
    while (i <= input.length) {
       let currentNumber = input[i]

       if (currentNumber === "Stop") {
        break;
        } else {
            currentNumber = Number(input[i])
        }
        allNumbers = allNumbers.concat(currentNumber);
        
        i++;
    }

    console.log(Math.min(...allNumbers));
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
