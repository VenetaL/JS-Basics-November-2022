function accountBalance(input) {
    let i = 0;
    let curentNumber = 0;
    let total = 0;
    
    while (i <= input.length) {
        curentNumber = (input[i]);

        if (curentNumber === "NoMoreMoney") {
            break;
        } else {
            curentNumber = Number(input[i]);
        }

        if (curentNumber >= 0) {
            console.log(`Increase: ${curentNumber.toFixed(2)}`)
        } else {
            console.log(`Invalid operation!`)
        }
        if (curentNumber < 0) {
            break;
        }
        total = total + curentNumber;
        i++;
    }   

    console.log(`Total: ${total.toFixed(2)}`)
}
accountBalance(["120",
"45.55",
"-150"])
