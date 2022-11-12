function sumSeconds([num1, num2, num3]) {

    let firstPlayer = parseInt(num1);
    let secondPlayer = parseInt(num2);
    let thirdPlayer = parseInt(num3);
    
    let seconds = firstPlayer + secondPlayer + thirdPlayer;
    let minutes = 0;

    if (seconds > 59) {
        minutes ++;
        seconds = seconds - 60;
    }

    if (seconds > 59) {
        minutes ++;
        seconds = seconds - 60;
    }

    if (seconds <10) {
        console.log(minutes + ":0" + seconds)
    } else {
        console.log(minutes + ":" + seconds)
    }

}


sumSeconds(["59", "59", "59"])