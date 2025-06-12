function leapYear(year){
    if(year % 400 === 0){
        return true
    }
    else if(year % 100 === 0){
        return false
    }
    else if(year % 4 === 0){
        return true
    }
    else {
        return false
    }
}
let yr=2000
console.log(leapYear(yr))


function checkLeap(yr){
    return (yr % 400 ===0 )||( yr % 4 ===0 && yr % 100 !==0)
}
console.log(checkLeap(2000))


function yrCheck(y){
    return  (y % 400 ===0 ) ? true : (y% 4===0 && y% 100 !==0)? true : false
}
console.log(yrCheck(2000))