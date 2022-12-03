function oldLibrary(input) {
    let neededBook = input[0];
    let i = 1;
    let y = 0;

    while (i < input.length) {
        let currentBook = input[i];
        let booksChecked = y;

        if (currentBook === neededBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        } 
        if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
            break;
        }
        
        i++;
        y++;
    }

}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

