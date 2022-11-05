function suppliesForSchools ([a,b,c,d]) {
    let totalSum = ((a * 5.8) + (b * 7.2) +(c * 1.2));
    let totalWithDiscount = totalSum - (totalSum * (d / 100))
    console.log (totalWithDiscount)
}


suppliesForSchools (["2","3","4","25"])