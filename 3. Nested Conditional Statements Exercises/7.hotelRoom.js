function hotelRoom(input) {
    let month = input[0];
    let nightsNumber = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nightsNumber * 50;
            apartmentPrice = nightsNumber * 65;
        if (nightsNumber > 7 && nightsNumber < 14) {
            studioPrice = studioPrice - (studioPrice * 5 / 100);
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else if (nightsNumber > 14) {
            studioPrice = studioPrice - (studioPrice * 30 / 100);
            apartmentPrice = apartmentPrice - (apartmentPrice * 10 / 100);
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }
        break;

        case "June":
        case "September":
        studioPrice = nightsNumber * 75.20;
        apartmentPrice = nightsNumber * 68.70;
        if (nightsNumber > 14) {
        studioPrice = studioPrice - (studioPrice * 20 / 100);
        apartmentPrice = apartmentPrice - (apartmentPrice * 10 / 100);
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else {
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } break;

        case "July":
        case "August":
        studioPrice = nightsNumber * 76;
        apartmentPrice = nightsNumber * 77;
            
        if (nightsNumber > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 10 / 100);
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } else {
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } break;
    }


}

hotelRoom(["May", "15"])

