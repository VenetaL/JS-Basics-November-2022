function areaOfFigures(input) {
    let shape = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    
    if (shape === "square") {
        let areaSquare = a * a;
        console.log(areaSquare.toFixed(3));
    }

    else if (shape === "rectangle") {
        let areaRectangle = a * b;
        console.log(areaRectangle.toFixed(3));
    }

    else if (shape === "circle") {
        let areaCircle = (a * a) * Math.PI;
        console.log(areaCircle.toFixed(3));
    }
    else {
        let areaTriangle = (a * b) * 0.5
        console.log(areaTriangle.toFixed(3))
    }
} 

areaOfFigures(["triangle", "4.5", "20"])