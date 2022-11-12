function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinutes = Number(input[3]);
    
    let examTime = (examHour * 60) + examMinutes 
    let arrivingTime = (arrivingHour * 60) + arrivingMinutes
    let difference = 0;
    let differenceHours = 0;
    let differenceMinutes = 0;
    
    if (examTime === arrivingTime)  {
        console.log("On time");
    }

    else if (examTime > arrivingTime) {
        difference = examTime - arrivingTime ;
        if (difference <= 30 && difference !== 0) {
            console.log("On time");
            console.log(`${difference} minutes before the start`)
        } else if (difference > 30 && difference <= 59) {
            console.log("Early");
            console.log(`${difference} minutes before the start`);
        } else if (difference >= 60) {
            differenceHours = Math.floor(difference / 60);
            differenceMinutes = difference % 60;
            console.log("Early");
                if (differenceMinutes <= 9){
                console.log(`${differenceHours}:0${differenceMinutes} hours before the start`)
                } else {
                    console.log(`${differenceHours}:${differenceMinutes} hours before the start`)
                }
        }
    }    
    else if (examTime < arrivingTime) {
        difference = arrivingTime - examTime;
        console.log(`Late`)
           if  (difference <= 59 && difference !== 0) {
                console.log(`${difference} minutes after the start`)
            } else if (difference >= 60) {
                differenceHours = Math.floor(difference / 60);
                differenceMinutes = difference % 60;
                    if (differenceMinutes <= 9){
                    console.log(`${differenceHours}:0${differenceMinutes} hours after the start`)
                    } else {
                            console.log(`${differenceHours}:${differenceMinutes} hours after the start`)
                    }
            }
    }
}      
onTimeForExam(["11",
"30",
"12",
"29"])


















