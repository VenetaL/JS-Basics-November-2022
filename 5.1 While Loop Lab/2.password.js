function password(input) {
    let name = input[0];
    let password = input[1];

    let i = 2;
    let passwordList = input.length;

    while (i <= passwordList) {
        let currentPassword = passwordList[i]
        if (currentPassword = password) {
            console.log(`Welcome ${name}!`)
            break;
        }
        i++; 
    }
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
