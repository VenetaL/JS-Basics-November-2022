function cleverLilly (input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let priceToy = Number(input[2]);

    let totalMoney = 0
    let birthdayMoneyEven = 10;


    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            totalMoney = totalMoney + (birthdayMoneyEven - 1);
            birthdayMoneyEven = birthdayMoneyEven + 10;
        } else {
           totalMoney = totalMoney + priceToy; 
        }        
    }

    if (totalMoney >= washingMachinePrice) {
        let moneyLeft = totalMoney - washingMachinePrice;
        console.log (`Yes! ${moneyLeft.toFixed(2)}`);
    } else if (totalMoney < washingMachinePrice) {
        let moneyLeft = washingMachinePrice - totalMoney;
        console.log(`No! ${moneyLeft.toFixed(2)}`);
    }
    
}

cleverLilly(["21",
"1570.98",
"3"])

