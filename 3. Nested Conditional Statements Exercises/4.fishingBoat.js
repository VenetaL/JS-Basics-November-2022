function fishingBoat (input) {
    let groupsBudget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let springPrice = 3000;
    let summerAndAutumnPrice = 4200;
    let winterPrice = 2600;
    let discount = 0;
    let totalPrice = 0;
    let difference = 0;

    if (fisherman <= 6) {
        
        switch (season) {
            case "Spring":
            discount = springPrice * 10 / 100;
            totalPrice = springPrice - discount;
            if (fisherman % 2 === 0) {
                totalPrice = totalPrice - (totalPrice * 5 / 100);
            }
            if (totalPrice <= groupsBudget) {
                difference = groupsBudget - totalPrice;
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
            } else if (totalPrice > groupsBudget) {
                difference = totalPrice - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
            }
            break;

            case "Summer":
            case "Autumn":
                discount = summerAndAutumnPrice * 10 / 100;
                totalPrice = summerAndAutumnPrice - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
            break;

            case "Winter":
                discount = winterPrice * 10 / 100;
                totalPrice = winterPrice - discount;
                if (fisherman % 2 === 0) {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
                break;
        }
    
    } else if (fisherman >=7 && fisherman <=11) {
        switch (season) {
            case "Spring":
            discount = springPrice * 15 / 100;
            totalPrice = springPrice - discount;
            if (fisherman % 2 === 0) {
                totalPrice = totalPrice - (totalPrice * 5 / 100);
            }
            if (totalPrice <= groupsBudget) {
                difference = groupsBudget - totalPrice;
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
            } else if (totalPrice > groupsBudget) {
                difference = totalPrice - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
            }
            break;

            case "Summer":
            case "Autumn":
                discount = summerAndAutumnPrice * 15 / 100;
                totalPrice = summerAndAutumnPrice - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
            break;

            case "Winter":
                discount = winterPrice * 15 / 100;
                totalPrice = winterPrice - discount;
                if (fisherman % 2 === 0) {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
                break;
        }
    }

    else {
        switch (season) {
            case "Spring":
            discount = springPrice * 25 / 100;
            totalPrice = springPrice - discount;
            if (fisherman % 2 === 0) {
                totalPrice = totalPrice - (totalPrice * 5 / 100);
            }
            if (totalPrice <= groupsBudget) {
                difference = groupsBudget - totalPrice;
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
            } else if (totalPrice > groupsBudget) {
                difference = totalPrice - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
            }
            break;

            case "Summer":
            case "Autumn":
                discount = summerAndAutumnPrice * 25 / 100;
                totalPrice = summerAndAutumnPrice - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
            break;

            case "Winter":
                discount = winterPrice * 25 / 100;
                totalPrice = winterPrice - discount;
                if (fisherman % 2 === 0) {
                    totalPrice = totalPrice - (totalPrice * 5 / 100);
                }
                if (totalPrice <= groupsBudget) {
                    difference = groupsBudget - totalPrice;
                    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (totalPrice > groupsBudget) {
                    difference = totalPrice - groupsBudget;
                    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
                }
                break;
        }

    }

}

function fishingBoat (input) {
    let groupsBudget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let neededBudget = 0;
    let finalBudget = 0;
    let discount = 0;
    let difference = 0;
   
    switch (season) {
        case "Spring":
            neededBudget = 3000;
            if (fisherman <= 6) {
                discount = neededBudget * 10 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            } else if (fisherman >  7 && fisherman <= 11) {
                discount = neededBudget * 15 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                }      
            } else {
                discount = neededBudget * 25 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            } 
        break;

        case "Summer":
        case "Autumn": 
            neededBudget = 4200;
            if (fisherman <= 6) {
                discount = neededBudget * 10 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                } 
                if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            } else if (fisherman >  7 && fisherman <= 11) {
                discount = neededBudget * 15 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                } else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                }      
            } else {
                discount = neededBudget * 25 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0 && season !== "Autumn") {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                } else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            }    
        break;

        case "Winter":
            neededBudget = 2600;
            if (fisherman <= 6) {
                discount = neededBudget * 10 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            } else if (fisherman >  7 && fisherman <= 11) {
                discount = neededBudget * 15 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                }      
            } else {
                discount = neededBudget * 25 / 100;
                finalBudget = neededBudget - discount;
                if (fisherman % 2 === 0) {
                    finalBudget = finalBudget - (finalBudget * 5 / 100);
                }
                else if (finalBudget <= groupsBudget) {
                difference = groupsBudget - finalBudget
                console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
                } else if (finalBudget > groupsBudget) {
                difference = finalBudget - groupsBudget;
                console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`) 
                } 
            } 
        break;
    
}
}
fishingBoat(["3000",
"Summer",
"11"])




