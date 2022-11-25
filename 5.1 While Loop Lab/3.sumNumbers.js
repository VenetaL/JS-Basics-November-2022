function sumNumbers(input) {
    let bigNumber = Number(input[0]);
    let i = 1;
    let allNumbers = 0;

    while (i <= input.length) {
        allNumbers = allNumbers + Number(input[i]);
        if (allNumbers >= bigNumber) {
            break;
        }
        i++;
    } 

    console.log(allNumbers);

}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

