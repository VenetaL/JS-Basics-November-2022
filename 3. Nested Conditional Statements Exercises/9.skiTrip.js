function skiTrip(input) {
    let daysStay = Number(input[0]);
    let typeStay = input[1];
    let feedback = input[2];

    let priceRoom = 18.00;
    let priceApartment = 25.00;
    let pricePresidentApartment = 35.00;

    let nightsStay = daysStay - 1;

    let wholeStay = 0;

    switch (typeStay) {
        case "room for one person":
            wholeStay = nightsStay * priceRoom;
            if (feedback === "positive") {
                wholeStay = wholeStay + (wholeStay * 25 / 100);
                console.log(wholeStay.toFixed(2));
            } else if (feedback === "negative") {
                wholeStay = wholeStay - (wholeStay * 10 / 100);
                console.log(wholeStay.toFixed(2));
            } break;

        case "apartment":
            wholeStay = nightsStay * priceApartment;
            if (nightsStay < 10) {
                wholeStay = wholeStay - (wholeStay * 30 / 100);
            } else if (nightsStay >= 10 && nightsStay <= 15) {
                wholeStay = wholeStay - (wholeStay * 35 / 100);
            } else if (nightsStay > 15) {
                wholeStay = wholeStay - (wholeStay * 50 / 100);
            }
            if (feedback === "positive") {
                wholeStay = wholeStay + (wholeStay * 25 / 100);
                console.log(wholeStay.toFixed(2));
            } else if (feedback === "negative") {
                wholeStay = wholeStay - (wholeStay * 10 / 100);
                console.log(wholeStay.toFixed(2));
            }
        break;
        
        case "president apartment":
            wholeStay = nightsStay * pricePresidentApartment;
            if (nightsStay < 10) {
                wholeStay = wholeStay - (wholeStay * 10 / 100);
            } else if (nightsStay >= 10 && nightsStay <= 15) {
                wholeStay = wholeStay - (wholeStay * 15 / 100);
                } else if (nightsStay > 15) {
                wholeStay = wholeStay - (wholeStay * 20 / 100);
                }
            if (feedback === "positive") {
                wholeStay = wholeStay + (wholeStay * 25 / 100);
                console.log(wholeStay.toFixed(2));
            } else if (feedback === "negative") {
                wholeStay = wholeStay - (wholeStay * 10 / 100);
                console.log(wholeStay.toFixed(2));
            }
            break;
    }
}
skiTrip(["2",
"apartment",
"positive"])



