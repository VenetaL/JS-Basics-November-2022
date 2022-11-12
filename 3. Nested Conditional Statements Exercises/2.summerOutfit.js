function summerOutfit(input) {
let degrees = Number(input[0]);
let timeOfDay = input[1]; 

let outfit; 
let shoes; 

if (degrees >=10 && degrees <= 18) {
    if (timeOfDay === "Morning") {
        let outfit = "Sweatshirt";
        let shoes = "Sneakers";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
        let outfit = "Shirt";
        let shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } 
}

else if (degrees <= 24) {
    if (timeOfDay === "Morning" || timeOfDay === "Evening") {
        let outfit = "Shirt";
        let shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } else if (timeOfDay === "Afternoon") {
        let outfit = "T-Shirt";
        let shoes = "Sandals";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    }
}

else if  (degrees >= 25) {
    if (timeOfDay === "Morning") {
        let outfit = "T-Shirt";
        let shoes = "Sandals";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
    } else if (timeOfDay === "Afternoon") {
        let outfit = "Swim Suit";
        let shoes = "Barefoot";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`) 
    } else if (timeOfDay === "Evening") {
        let outfit = "Shirt";
        let shoes = "Moccasins";
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)             
    }
}
    

}
summerOutfit(["22", "Afternoon"])

