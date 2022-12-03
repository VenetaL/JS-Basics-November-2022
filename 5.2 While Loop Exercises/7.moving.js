function moving(input) {
    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeigth = Number(input[2]);

    let spaceVolume = spaceHeigth * spaceLength * spaceWidth;
    let freeSpace = spaceVolume;

    let boxNumber;
    let i = 3;

    while (freeSpace >=0) {
        boxNumber = input[i];

        if (boxNumber === "Done" || i >= input.length) {
            break;
        }
        boxNumber = Number(input[i])
        freeSpace = freeSpace - boxNumber;
        i++;
    }

    if (boxNumber === "Done" && freeSpace >0) {
        console.log(`${freeSpace} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
    }

}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

