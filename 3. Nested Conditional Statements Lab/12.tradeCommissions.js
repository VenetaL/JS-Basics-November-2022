function tradeCommissions(input) {
    let town = input[0];
    let quantaties = Number(input[1]);

    if (quantaties < 0) {
        console.log("error")
    }
 
    switch (town) {
        case "Sofia":
            if (quantaties >= 0 && quantaties <= 500) {
                let smallCommission = quantaties * 5 / 100;
                console.log(smallCommission.toFixed(2));  
            } else if (quantaties > 500 && quantaties <=1000) {
                let bigCommission = quantaties * 7 / 100;
                console.log(bigCommission.toFixed(2));
            } else if (quantaties > 1000 && quantaties <= 10000) {
                let biggerCommission = quantaties * 8 / 100;
                console.log(biggerCommission.toFixed(2));
            } else if (quantaties > 10000) {
                let highesCommission  = quantaties * 12 / 100;
                console.log(highesCommission.toFixed(2));    
            } break;
        
        case "Varna":
            if (quantaties >= 0 && quantaties <= 500) {
                let smallCommission = quantaties * 4.5 / 100;
                console.log(smallCommission.toFixed(2));  
            } else if (quantaties > 500 && quantaties <=1000) {
                let bigCommission = quantaties * 7.5 / 100;
                console.log(bigCommission.toFixed(2));
            } else if (quantaties > 1000 && quantaties <= 10000) {
                let biggerCommission = quantaties * 10 / 100;
                console.log(biggerCommission.toFixed(2));
            } else if (quantaties > 10000) {
                let highesCommission  = quantaties * 13 / 100;
                console.log(highesCommission.toFixed(2));    
            } break;
           
        case "Plovdiv":
            if (quantaties >= 0 && quantaties <= 500) {
                let smallCommission = quantaties * 5.5 / 100;
                console.log(smallCommission.toFixed(2));  
            } else if (quantaties > 500 && quantaties <=1000) {
                let bigCommission = quantaties * 8 / 100;
                console.log(bigCommission.toFixed(2));
            } else if (quantaties > 1000 && quantaties <= 10000) {
                let biggerCommission = quantaties * 12 / 100;
                console.log(biggerCommission.toFixed(2));
            } else if (quantaties > 10000) {
                let highesCommission  = quantaties * 14.5 / 100;
                console.log(highesCommission.toFixed(2));    
            } break;
        
        default:
            console.log("error")
            break;
    }
}
tradeCommissions(["Varna", "9999.9999"])

