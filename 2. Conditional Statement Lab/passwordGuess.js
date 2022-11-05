function passwordGuess(input) {
    let password = (input[0]);
    let rigthPassword = "s3cr3t!P@ssw0rd";

    if (password == rigthPassword) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["3"])