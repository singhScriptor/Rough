function leapYear(year){
    let leapYear=  (year%400 === 0 || (year % 400 !== 0 && year % 100 === 0  || year % 4===0 && year%100 !==0)) ?"true" : "false "
    return leapYear
}
console.log(leapYear(2020)) // true