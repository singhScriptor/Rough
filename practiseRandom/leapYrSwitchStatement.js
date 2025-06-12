function checkLeapYr_switchCase(yr){
    switch(true){
        case (yr % 400 ===0):
            return true
        case (yr % 100 === 0 && yr %  400 !== 0 ):
            return false
        case (yr % 100 !== 0 && yr % 4 === 0):
            return true   
        default:
            return false         
    }
}
let yr=1900
console.log(checkLeapYr_switchCase(yr))