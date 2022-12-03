function walking(input) {
    let goalSteps = 10000;
    let currentSteps = 0;
    let i = 0;

    while (input[i] !== "Going home" && currentSteps < goalSteps) {
        currentSteps = currentSteps + Number(input[i]);    
        i++;
    }

    if (input[i] === "Going home") {
        currentSteps = currentSteps + Number(input[i+1])
        if (currentSteps < goalSteps) {
        let differenceSteps = goalSteps - currentSteps;
        console.log(`${differenceSteps} more steps to reach goal.`);
        }
    }

    if (currentSteps >= goalSteps) {
        let differenceSteps = currentSteps - goalSteps;
        console.log(`Goal reached! Good job!`);
        console.log(`${differenceSteps} steps over the goal!`)
        }
    
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



