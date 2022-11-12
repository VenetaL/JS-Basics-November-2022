function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantaties = Number(input[2]);

    if (product === "coffee") {
        switch (town) { 
         case "Sofia":
            let coffeePriceSofia = 0.5;
            console.log(quantaties * coffeePriceSofia);
            break;
        case "Plovdiv":
            let coffeePricePlovdiv = 0.4;
            console.log(quantaties * coffeePricePlovdiv)
            break;
        case "Varna":
            let coffeePriceVarna = 0.45;
            console.log(quantaties * coffeePriceVarna)
            break;
        }
    } else if (product === "water") {
        switch (town) {
            case "Sofia":
                let waterPriceSofia = 0.8;
                console.log(quantaties * waterPriceSofia);
                break;
            case "Plovdiv":
            case "Varna":
                let waterPrice = 0.7;
                console.log(quantaties * waterPrice);
                break;
        }
    } else if (product === "beer") {
        switch (town) {
            case "Sofia":
                let beerPriceSofia = 1.2;
                console.log(quantaties * beerPriceSofia);
                break;
            case "Plovdiv":
                let beerPricePlovdiv = 1.15;
                console.log(quantaties * beerPricePlovdiv)
                break;
            case "Varna":
                let beerPriceVarna = 1.1;
                console.log(quantaties * beerPriceVarna)
                break;

        }
    } else if (product === "sweets") {
        switch (town) {
            case "Sofia":
                let sweetsPriceSofia = 1.45;
                console.log(quantaties * sweetsPriceSofia);
                break;
            case "Plovdiv":
                let sweetPricePlovdiv = 1.3;
                console.log(quantaties * sweetPricePlovdiv)
                break;
            case "Varna":
                let sweetPriceVarna = 1.35
                console.log(quantaties *sweetPriceVarna);
                break;
        }
    } else if (product === "peanuts") {
        switch (town) {
            case "Sofia":
                let peanutsPricceSofia = 1.60;
                console.log(quantaties * peanutsPricceSofia);
                break;
            case "Plovdiv":
                let peanutsPricePlovdiv = 1.50;
                console.log(quantaties * peanutsPricePlovdiv);
                break;
            case "Varna":
                let peanutsPriceVarna = 1.55;
                console.log(quantaties * peanutsPriceVarna);
                break;
        }
    }

}
smallShop(["beer", "Plovdiv", "2"])





