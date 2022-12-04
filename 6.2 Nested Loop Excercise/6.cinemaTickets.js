function cinemaTicket(input) {
    let x = 0;
    let movieName = input[x];
    x++;

    let allTickets = 0;
    let allStandardTickets = 0;
    let allStudentTickets = 0;
    let allKidsTickets = 0;


    while (movieName !== "Finish") {
        let allSeats = Number(input[x]);
        x++;
        let ticketType = input[x];
        x++;
        let currentTickets = 0;
        while (ticketType !== "End") {
            allTickets++;
            currentTickets++;
            if (ticketType === "standard") {
                allStandardTickets++;
            } else if (ticketType === "student") {
                allStudentTickets++;
            } else if (ticketType === "kid") {
                allKidsTickets++;
            }

            if (currentTickets === allSeats) {
                break;
            }

            ticketType = input[x]
            x++
        }


        let currentPercent = currentTickets / allSeats * 100;
        console.log(`${movieName} - ${currentPercent.toFixed(2)}% full.`)


        movieName = input[x]
        x++;
    }

    console.log(`Total tickets: ${allTickets}`)
    console.log(`${(allStudentTickets / allTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(allStandardTickets / allTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(allKidsTickets / allTickets * 100).toFixed(2)}% kids tickets.`)
}

cinemaTicket(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

