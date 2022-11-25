function numbersDivisibleByNine (input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let total = 0;
    let allNumbers = [];


    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
        total = total + i;
        allNumbers[allNumbers.length] = i;
        }  
    }

    console.log(`The sum: ${total}`);
    allNumbers.forEach(allNumbers => console.log(`${allNumbers}`))
   
}
    
numbersDivisibleByNine(["100", "200"])