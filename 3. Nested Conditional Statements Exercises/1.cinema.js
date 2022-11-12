function cinema(input) {
    let currentMovie = input [0];
    let rows = Number(input[1])
    let colums = Number(input[2]);

    let profit = rows * colums;

    switch (currentMovie) {
        case "Premiere":
        profit = profit * 12;
        console.log(profit.toFixed(2));
        break;
        
        case "Normal":
        profit = profit * 7.5;
        console.log(profit.toFixed(2));
        break;
        
        case "Discount":
        profit = profit * 5;
        console.log(profit.toFixed(2));
        break;
    }

}

cinema(["Discount", "12", "30"])



