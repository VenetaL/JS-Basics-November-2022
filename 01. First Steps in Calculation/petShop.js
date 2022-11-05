function petShop (input) {
    let dogsFoodNumber = (input[0]);
    let catsFoodNumber = (input [1]);
    let dogsPrice = 2.5;
    let catsPrice = 4;
    let finalPrice = (dogsFoodNumber * dogsPrice) + (catsFoodNumber * catsPrice);

    console.log(`${finalPrice} lv.`);
}

petShop([10, 30])