function shopping(input) {
    let peterBudget = Number(input[0]);
    let videoCardsNumber = Number(input[1]);
    let processorNumber = Number(input[2]);
    let ramNumber = Number(input[3]);

    let pricePerVideoCard = 250;
    let videoCardBudget = videoCardsNumber * pricePerVideoCard;
    let pricePerProcessor = videoCardBudget * 0.35;
    let pricePerRam = videoCardBudget * 0.1;

    let processorBudget = pricePerProcessor * processorNumber;
    let ramBudget = pricePerRam * ramNumber;

    let neededBudget = videoCardBudget + processorBudget + ramBudget;

    if (videoCardsNumber > processorNumber) {
        neededBudget = neededBudget - (neededBudget * 0.15);
    } 
    
    if (neededBudget <= peterBudget) {
        let difference = peterBudget - neededBudget;
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
        let difference = neededBudget - peterBudget;
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }

}

shopping(["920.45", "3", "1", "1"])

