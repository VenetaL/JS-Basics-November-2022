function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let tankVolumeCm = length * width * height;
    let tankVolumeLitres = tankVolumeCm * 0.001;
    let occupiedSpace = percentage / 100;
    let litresNeeded = tankVolumeLitres * (1 - occupiedSpace);

    console.log (litresNeeded);
}

fishTank(["85","75","47","17"])