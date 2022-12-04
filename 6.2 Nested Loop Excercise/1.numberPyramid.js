function numberPyramid(input) {
    let givenNumber = Number(input[0]);
    let num = 1;
    let result = [];

    for (let row = 1; row <= givenNumber; row++) {
        for (let col = 1; col <= row; col++) {
            result = result.concat(num);
            num++;

            if (num > givenNumber) {
                break;
            }
        }

        console.log(...result);
        result = [];

        if (num > givenNumber) {
            break;
        }
    }


}

numberPyramid(["15"])