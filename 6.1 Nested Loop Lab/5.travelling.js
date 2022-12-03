function travelling(input) {

    for (i = 0; i <input.length; i++) {
        let destinaton = input[i];
        let moneyNeeded = Number(input[i+1])
        let moneySaved = 0;
        let currentMoneySaved = 0; 
        
        while(destinaton !== "End") {
        loop1:
            for (y = i + 2; y <= input.length - 2; y++) {
            currentMoneySaved = Number(input[y])
            moneySaved = moneySaved + currentMoneySaved;
                if (moneySaved >= moneyNeeded) {
                console.log(`Going to ${destinaton}!`);
                i = y;
                destinaton = "End";
                break loop1;
                }
            }
        
        }

    }

}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


