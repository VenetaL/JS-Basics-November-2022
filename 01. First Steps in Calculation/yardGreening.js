function yardGreening (input) {
    let yardSqMetres = (input[0]);
    let price = 7.61 * yardSqMetres;
    let discount = 0.18 * price;
    let finalPrice = price - discount; 
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

yardGreening ([100])