function readText(input) {
    let i = 0;
    let textLength = input.length;

    while (i <= textLength) {
        let text = input[i];
            if (text === "Stop") {
                break;
            }
        console.log(text)
        i++;
    }
    
}


readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
