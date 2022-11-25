function trekkingMania (input) {
    let groupsNumber = Number(input[0]);

    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupKTwo = 0;
    let groupEverest = 0;

    let groupSize = 0;
    let totalPeople = 0;

    for (let i = 1; i <= groupsNumber; i++) {
        groupSize = Number(input[i]);
        totalPeople = totalPeople + groupSize;
        if (groupSize < 6) {
            groupMusala = groupMusala + groupSize;
        } else if (groupSize < 13) {
            groupMonblan = groupMonblan + groupSize;
        } else if (groupSize < 26) {
            groupKilimandjaro = groupKilimandjaro + groupSize;
        } else if (groupSize < 41) {
            groupKTwo = groupKTwo + groupSize;
        } else {
            groupEverest = groupEverest + groupSize;
        }

    }

    let percentMusala = groupMusala / totalPeople * 100;
    let percentMonblan= groupMonblan / totalPeople * 100;
    let percentKilimandjaro = groupKilimandjaro / totalPeople * 100;
    let percentKTwo = groupKTwo / totalPeople * 100;
    let percentEverest = groupEverest / totalPeople * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    console.log(`${percentKTwo.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

