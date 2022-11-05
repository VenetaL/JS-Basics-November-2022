function basketballEquipment (input) {
    let basketballFee = Number(input[0])
    let sneakersPrice = basketballFee - (basketballFee * 0.4);
    let shortsPrice = sneakersPrice - (sneakersPrice * 0.2);
    let ballPrice = shortsPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.2;
    let yearlyEquipmentPrice = basketballFee + sneakersPrice + shortsPrice + ballPrice + accessoriesPrice; 

    console.log(yearlyEquipmentPrice);
}

basketballEquipment (["550"])


