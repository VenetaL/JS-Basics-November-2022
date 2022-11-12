function fruitShop (input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    
     
    switch (fruit) {
        case "banana":
            if (day === "Saturday" || day === "Sunday") {
                let bananaPrice = quantity * 2.70;
                console.log(bananaPrice.toFixed(2));
            } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                let bananaPrice = quantity * 2.50;
                console.log(bananaPrice.toFixed(2));                
            } else {
                console.log("error")
            } break;
        
        case "apple":
            if (day === "Saturday" || day === "Sunday") {
                let applePrice = quantity * 1.25;
                console.log(applePrice.toFixed(2));
            } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                let applePrice = quantity * 1.20;
                console.log(applePrice.toFixed(2));
            } else {
                console.log("error")
            }
            break;
        
        case "orange":
            if (day === "Saturday" || day === "Sunday") {
                let orangePrice = quantity * 0.90;
                console.log(orangePrice.toFixed(2));
            } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                let orangePrice = quantity * 0.85;
                console.log(orangePrice.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "grapefruit":
            if (day === "Saturday" || day === "Sunday") {
                let grapefruitPrice = quantity * 1.60;
                console.log(grapefruitPrice.toFixed(2));
            } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                let grapefruitPrice = quantity * 1.45;
                console.log(grapefruitPrice.toFixed(2));
           } else {
                console.log("error")
            }break;
        
        case "kiwi":
            if (day === "Saturday" || day === "Sunday") {
                let kiwiPrice = quantity * 3.00;
                console.log(kiwiPrice.toFixed(2));
            } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                let kiwiPrice = quantity * 2.70;
                console.log(kiwiPrice.toFixed(2));
           } else {
                console.log("error")
            }break;
            
        case "pineapple":
            if (day === "Saturday" || day === "Sunday") {
                    let pineapplePrice = quantity * 5.60;
                    console.log(pineapplePrice.toFixed(2));
                } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                    let pineapplePrice = quantity * 5.50;
                    console.log(pineapplePrice.toFixed(2));
               } else {
                    console.log("error")
                }break;
        
        case "grapes":
            if (day === "Saturday" || day === "Sunday") {
                    let grapesPrice = quantity * 4.20;
                    console.log(grapesPrice.toFixed(2));
                } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                    let grapesPrice = quantity * 3.85;
                    console.log(grapesPrice.toFixed(2));
               } else {
                    console.log("error")
                }break;
        
        default:
            console.log("error");
            break; 
      }
}

fruitShop(["apple", "Workday", "2"])




