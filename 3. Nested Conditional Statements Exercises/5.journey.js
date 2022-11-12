function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let moneySpent = 0;
    let destination;


    if (budget <= 100) {
        destination = "Bulgaria";
        console.log(`Somewhere in Bulgaria`)
            switch (season) {
                case "summer":
                    moneySpent = budget * 30 / 100;
                    console.log(`Camp - ${moneySpent.toFixed(2)}`)
                break;
                case "winter":
                    moneySpent = budget * 70 / 100;
                    console.log(`Hotel - ${moneySpent.toFixed(2)}`)
                break;
            }    
    } else if (budget <= 1000) {
        destination = "Balkans";
        console.log(`Somewhere in Balkans`)
        switch (season) {
            case "summer":
                    moneySpent = budget * 40 / 100;
                    console.log(`Camp - ${moneySpent.toFixed(2)}`)
                break;
                case "winter":
                    moneySpent = budget * 80 / 100;
                    console.log(`Hotel - ${moneySpent.toFixed(2)}`)
                break;
        }
    } else {
        destination = "Europe";
        console.log(`Somewhere in Europe`)
        moneySpent = budget * 90 / 100;
        console.log(`Hotel - ${moneySpent.toFixed(2)}`)
    }


} journey(["1500", "summer"])