function hoursMinute(hours){
    let minute = hours * 60
    return minute
}
let hours = 5
console.log(hoursMinute(hours)) // 300

function hoursSecond(hrs){
    let second = hrs * 3600
    return second
}
let hrs=5
console.log(hoursSecond(hrs)) // 18000