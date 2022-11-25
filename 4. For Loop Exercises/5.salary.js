function salary(input) {
    let tabNumbers = Number(input[0]);
    let monthlySalary = Number(input[1]);


    let tabFacebook = 150;
    let tabInstagram = 100;
    let tabReddit = 50;

    let moneyLeft = monthlySalary;
    
    
    for (let i = 2; i < input.length; i++) {
        let tabs = input[i];
    
        switch (tabs) {
        case "Facebook":
        moneyLeft = moneyLeft - tabFacebook;
        break;
    
        case "Instagram":
        moneyLeft = moneyLeft - tabInstagram;
        break;

        case "Reddit":
        moneyLeft = moneyLeft - tabReddit;
        break;
        }
    }
    
    if (moneyLeft <=0) {
        console.log("You have lost your salary.")
    } else {
        console.log(moneyLeft);
    }
        
    }

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



