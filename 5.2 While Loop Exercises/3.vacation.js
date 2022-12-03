function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyCurrent = Number(input[1]);
    
    let index = 2;
    let action = input[index];
    index++;
    let actionMoney = Number(input[index]);

    let daysSpend = 0;
    let daysSave = 0;
    let allDays = 0;


    while (moneyCurrent < moneyNeeded) {
        
        if (moneyCurrent < 0) {
            moneyCurrent = 0;
        }

        if (action === "spend") {
            moneyCurrent -= actionMoney;
            daysSpend++;
            allDays++;
            if (daysSpend === 5) {
                console.log(`You can't save the money.`);
                console.log(`${allDays}`)
                break;
            }
        } else if (action === "save") {
            moneyCurrent += actionMoney;
            daysSave++;
            allDays++;
                if (daysSave >= 1) {
                daysSpend = 0;
                }
        }

        if (moneyCurrent >= moneyNeeded) {
            console.log(`You saved the money for ${allDays} days.`)
            break;
        }

        index++;
        action = input[index];
        index++;
        actionMoney = Number(input[index]);
              
    }
    
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])













