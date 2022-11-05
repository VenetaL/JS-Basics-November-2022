function repainting (input) {
    //materials quantity
    let naylonQuantity = Number(input[0]);
    let colorQuantity = Number(input [1]);
    let diluentQuantity = Number(input [2]);
    let totalHours = Number(input [3]);
   
    //materials price & work
    let naylonPrice = ((naylonQuantity + 2)) * 1.5;
    let colorPrice = (colorQuantity + (colorQuantity * 0.1)) * 14.5;
    let diluentPrice = diluentQuantity * 5;
    let bagsPrice = 0.4
    let sumAllMaterials = naylonPrice + colorPrice + diluentPrice + bagsPrice
    let sumWorkers = (sumAllMaterials * 0.3) * totalHours
    let sumAll = sumAllMaterials + sumWorkers

    console.log(sumAll);

}

repainting (["10","11","4","8"]);