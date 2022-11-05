    function projectDate (input) {
    let architect = (input[0]);
    let projectsNumber = Number(input[1]);
    let totalHours = projectsNumber * 3;

    console.log (`The architect ${architect} will need ${totalHours} hours to complete ${projectsNumber} project/s.`)
    }

    projectDate(["Veneta", 3, 11])
