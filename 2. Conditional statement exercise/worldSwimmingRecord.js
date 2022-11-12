function worldSwimmingRecord (input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let ivanTimePerMeter = Number(input[2]);
    
    let ivanRecord = distance * ivanTimePerMeter;
    let longDistance = Math.floor(distance / 15);
    let additionalSeconds = longDistance * 12.5;

    if (longDistance > 0) {
    ivanRecord = ivanRecord + additionalSeconds;
    }
          
   if (currentRecord <= ivanRecord) {
        let difference = (ivanRecord - currentRecord)
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    } 
    else {
        console.log(`Yes, he succeeded! The new world record is ${ivanRecord.toFixed(2)} seconds.`)
    }

}

worldSwimmingRecord(["10464", "1500", "20"])


