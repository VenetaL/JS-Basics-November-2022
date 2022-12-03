function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let cakeArea = cakeWidth * cakeLength;
    let cakeTaken = 0;
    let cakeLeft = cakeArea;
    let i = 2;

    while (cakeLeft >= 0) {
        cakeTaken = input[i] 
        if (cakeTaken === "STOP"  || i >= input.length ) {    
        break;
        }
        cakeTaken = Number(input[i]) 
        cakeLeft = cakeLeft - cakeTaken;
        cakeTaken = input[i];   
        i++
        }
    
    if (cakeLeft < 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeLeft)} pieces more.`)
    } else {
        console.log(`${cakeLeft} pieces are left.`)
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


