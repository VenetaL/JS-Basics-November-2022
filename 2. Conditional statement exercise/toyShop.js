function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let bearsNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    let puzzlesPrice = 2.6;
    let dollsPrice = 3;
    let bearsPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2; 

    let price =(puzzlesNumber * puzzlesPrice) + (dollsNumber * dollsPrice) + (bearsNumber * bearsPrice) + (minionsNumber * minionPrice) + (trucksNumber * truckPrice);
    
    if ((puzzlesNumber + dollsNumber + bearsNumber + minionsNumber + trucksNumber) >= 50) {
        price = price - (price * 0.25);
    }
    let profitMade = price - (price * 0.1);
    let moneyLeft = profitMade - tripPrice;
    let moneyNeeded = tripPrice - profitMade;
    
    if(profitMade >= tripPrice) {
        console.log (`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])
