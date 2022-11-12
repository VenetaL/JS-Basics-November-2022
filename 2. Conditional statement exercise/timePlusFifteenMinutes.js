function timePlusFifteenMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let futureTime = minutes + 15;

    if(futureTime >59) {
        hours ++
        futureTime = futureTime - 60;
    }

    if(hours > 23) {
        hours = hours - 24;
    }
    
    if(futureTime < 10) {
        console.log(hours + ":0" + futureTime);
    }    
    else {
        console.log(hours + ":" + futureTime);
    }

}

timePlusFifteenMinutes([23, 46])