function lunchBreak(input) {
    let moveName = input[0];
    let moveLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let lunchLenght = breakLenght * 0.125;
    let restLenght = breakLenght * 0.25;
    
    let timeLneeded = moveLenght + lunchLenght + restLenght;

    if (breakLenght >= timeLneeded) {
        let difference = Math.ceil(breakLenght - timeLneeded);
        console.log(`You have enough time to watch ${moveName} and left with ${difference} minutes free time.`);

    } else {
        let difference = Math.ceil(timeLneeded - breakLenght);
        console.log(`You don't have enough time to watch ${moveName}, you need ${difference} more minutes.`)
    }

}

lunchBreak(["Teen Wolf", "48", "60"])

