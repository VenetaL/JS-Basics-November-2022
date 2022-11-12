function godzillaVsKong(input) {
    let budgetFilm = Number(input[0]);
    let smallActorsNumber = Number(input[1]);
    let costumPricePerSmallActor = Number(input[2]);
    
    let costumPrice = smallActorsNumber * costumPricePerSmallActor;
    if (smallActorsNumber > 150) {
        costumPrice = costumPrice - (costumPrice * 0.1);
    }

    let decorFilm = budgetFilm * 0.1;
    
    let neededMoney = (decorFilm + costumPrice) - budgetFilm;
    let moneyLeft = (budgetFilm) - (decorFilm + costumPrice);

  
    if ((decorFilm + costumPrice) > budgetFilm) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }

    else  {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
        
}
}

godzillaVsKong(["20000", "120", "55.5"])