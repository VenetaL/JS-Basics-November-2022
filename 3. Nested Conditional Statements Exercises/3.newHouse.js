function newHouse(input) {
    let flowers = input[0];
    let flowersNumber = Number(input[1]);
    let budget = Number(input[2]);

    switch (flowers) {
        case "Roses":
        let rosesPrice = flowersNumber * 5;
            if (flowersNumber > 80) {
                rosesPrice = rosesPrice - (rosesPrice * 0.1);
            }
            if (rosesPrice <= budget) {
                let difference = budget - rosesPrice;
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${difference.toFixed(2)} leva left.`);
            } else if (rosesPrice > budget) {
                let difference = rosesPrice - budget;
                console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
            }
        break;
        
        case "Dahlias":
        let dahliasPrice = flowersNumber * 3.8;
            if (flowersNumber > 90) {
                dahliasPrice = dahliasPrice - (dahliasPrice * 0.15);
            }
            if (dahliasPrice <= budget) {
                let difference = budget - dahliasPrice;
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${difference.toFixed(2)} leva left.`);
            } else if (dahliasPrice > budget) {
                let difference = dahliasPrice - budget;
                console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
            }
            break;
        
        case "Tulips":
        let tulipsPrice = flowersNumber * 2.8;
            if (flowersNumber > 80) {
                tulipsPrice = tulipsPrice - (tulipsPrice * 0.15);
            }
            if (tulipsPrice <= budget) {
                let difference = budget - tulipsPrice;
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${difference.toFixed(2)} leva left.`);
            } else if (tulipsPrice > budget) {
                let difference = tulipsPrice - budget;
                console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
            }
            break;
        
        case "Narcissus":
        let narcissusPrice = flowersNumber * 3;
            if (flowersNumber < 120) {
                narcissusPrice = narcissusPrice + (narcissusPrice * 0.15);
            }
            if (narcissusPrice <= budget) {
                let difference = budget - narcissusPrice;
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${difference.toFixed(2)} leva left.`);
            } else if (narcissusPrice > budget) {
                let difference = narcissusPrice - budget;
                console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
            }
            break;

        case "Gladiolus":
        let gladiolusPrice = flowersNumber * 2.50;
            if (flowersNumber < 80) {
                gladiolusPrice = gladiolusPrice + (gladiolusPrice * 0.2);
            }
            if (gladiolusPrice <= budget) {
                let difference = budget - gladiolusPrice;
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${difference.toFixed(2)} leva left.`);
            } else if (gladiolusPrice > budget) {
                let difference = gladiolusPrice - budget;
                console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
            }
            break;
    }       
}
newHouse(["Dahlias", "112", "460]"])







