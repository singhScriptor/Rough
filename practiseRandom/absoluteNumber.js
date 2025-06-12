function absoluteNumber(num){
    //return num < 0 ? -num : num
    // return Math.abs(num)
    if(num < 0){
        return -num
    }
    return num
}
let num =-8
console.log(absoluteNumber(num))