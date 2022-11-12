function hoursMinutes() {

let hours = 5;
let minutes = 30;
let hoursPlusMinutes = (hours * 60) + minutes

let onlyMinutes = 400

let difference = 0;

if (hoursPlusMinutes <= onlyMinutes) {
    let difference = onlyMinutes - hoursPlusMinutes
    if (difference > 60) {
        let differentHour = Math.floor(difference / 60)
        let differentMinutes = difference % 60
        console.log(`${differentHour}:${differentMinutes}`)
}

} 

} hoursMinutes()


