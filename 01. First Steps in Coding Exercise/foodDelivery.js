function foodDelivery (input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.4;
    let veggiePrice = veggieMenus * 8.15;

    let menusPrice = chickenPrice + fishPrice + veggiePrice;
    let dessertPrice = menusPrice * 0.2;
    let deliveryPrice = 2.5;

    let orderPrice = menusPrice + dessertPrice + deliveryPrice;


    console.log(orderPrice);

}

foodDelivery (["2","4","3"])